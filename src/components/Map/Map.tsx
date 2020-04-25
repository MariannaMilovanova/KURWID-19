import React, {Component} from 'react';
import {compose, withProps} from 'recompose';
import {GoogleMap, withGoogleMap} from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import './Map.scss';
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
  };
  map = React.createRef();

  componentDidMount = () => {
    let map, infoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.setState({currentLocation: pos});
        },
        function () {
          console.warn(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      console.warn(false, infoWindow, map.getCenter());
    }
  };

  onMapClick = () => {
    console.warn('aaa click on map');
  };

  render() {
    const {currentLocation} = this.state;

    return (
      <div className={b(block)}>
        <GoogleMap
          ref={this.map as any}
          defaultZoom={15}
          onClick={this.onMapClick}
          center={currentLocation}
        >
          <InfoBox position={new google.maps.LatLng(currentLocation.lat, currentLocation.lng)}>
            <div className={b(block, 'location')}>
              <div>You are here</div>
            </div>
          </InfoBox>
        </GoogleMap>
      </div>
    );
  }
}

export default compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `70vh`}} />,
    mapElement: <div style={{height: `100%`}} />,
  }),
  withGoogleMap
)(MapComponent);
