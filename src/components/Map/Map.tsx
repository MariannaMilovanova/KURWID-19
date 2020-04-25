import React, {Component} from 'react';
import {compose, withProps} from 'recompose';
import {get, isEmpty, map, uniqueId} from 'lodash';
import {GoogleMap, withGoogleMap} from 'react-google-maps';
import {MAP} from 'react-google-maps/lib/constants';
//import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import './Map.scss';
import CustomMarker from '../CustomMarker/CustomMarker';
import {b, createBlock} from '../../helpers/bem';

const block = createBlock('Map');
/*
 чекбоксы в ряд с типом заведения,
 приселекнуты рестораны
 отображаются только выбранные места
 заведения без рейтинга отображаются серым
 цвет заведения с рейтингом отображаются в зависимости от оценки
 при клике на метку появляется блок внизу с инофрмацией про заведение (Selected Place)
*/

class MapComponent extends Component {
  state = {
    defaultCenter: {lat: 50.45, lng: 30.52},
    currentLocation: {lat: 50.45, lng: 30.52},
    places: [],
    mapObj: null,
  };
  map = React.createRef();

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.fetchPlaces(pos);
          this.setState({currentLocation: pos});
        },
        function () {
          console.warn('error');
        }
      );
    } else {
      // Browser doesn't support Geolocation
      console.warn(`Browser doen't support Geolocation`);
    }
  };
  onMapClick = (e) => {
    console.warn('aaa click on map', e);
  };
  //@ts-ignore
  fetchPlaces = (coord) => {
    const {mapObj: map} = this.state;
    const request = {
      location: coord,
      radius: 1000,
      type: ['restaurant', 'bar', 'cafe'],
    };
    console.warn(this.state.currentLocation);
    //@ts-ignore
    const service = new window.google.maps.places.PlacesService(map);
    //@ts-ignore
    service.nearbySearch(request, (results, status) => {
      console.warn('status', status);
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.warn(results);
        const places = results.map((item) => {
          return {
            position: item.geometry.location,
            id: item.id,
            place_id: item.place_id,
            name: item.name,
            photo: item.photos ? item.photos[0].getUrl() : '',
          };
        });
        this.setState({places});
      }
    });
  };
  mapMounted = (element) => {
    const mapObject = element.context[MAP];
    this.setState({mapObj: mapObject});

    this.fetchPlaces(mapObject);
  };

  render() {
    const {currentLocation, places} = this.state;
    console.warn(places);

    return (
      <div>
        <div className={b(block)}>
          <GoogleMap
            defaultZoom={15}
            onClick={this.onMapClick}
            center={currentLocation}
            ref={this.mapMounted}
            options={{
              styles: [
                {
                  featureType: 'all',
                  elementType: 'labels.text',
                  stylers: [
                    {
                      visibility: 'off',
                    },
                  ],
                },
                {
                  featureType: 'all',
                  elementType: 'labels.icon',
                  stylers: [
                    {
                      visibility: 'off',
                    },
                  ],
                },
              ],
            }}
          >
{/*            <InfoBox position={new google.maps.LatLng(currentLocation.lat, currentLocation.lng)}>
              <div className={b(block, 'location')}>
                <div>You are here</div>
              </div>
            </InfoBox>*/}
            <CustomMarker
              marker={{position: new google.maps.LatLng(currentLocation.lat, currentLocation.lng)}}
              key={uniqueId('marker_')}
              selectMarker={() => {}}
              type={'blue'}
            />
            {!isEmpty(places) &&
              map(places, (marker) => (
                <CustomMarker
                  marker={marker}
                  key={get(marker, '_id', uniqueId('marker_'))}
                  selectMarker={() => {}}
                />
              ))}
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default compose(
  withProps({
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `70vh`}} />,
    mapElement: <div style={{height: `100%`}} />,
  }),
  withGoogleMap
)(MapComponent);
