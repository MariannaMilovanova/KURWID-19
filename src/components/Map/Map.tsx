import React, {Component} from 'react';
import {noop} from 'lodash';
import {compose, withProps} from 'recompose';
import {GoogleMap, withGoogleMap} from 'react-google-maps';
/*import CustomCircle from './Circle';
import CustomMarker from './Marker';*/
import './Map.scss';
/*
 чекбоксы в ряд с типом заведения,
 приселекнуты рестораны
 отображаются только выбранные места
 заведения без рейтинга отображаются серым
 цвет заведения с рейтингом отображаются в зависимости от оценки
 при клике на метку появляется блок внизу с инофрмацией про заведение (Selected Place)
*/

class MapComponent extends Component {
  static defaultProps = {
    markers: {},
    selectMarker: noop,
    addTempMarker: noop,
    radius: false,
    filterMarkers: noop,
  };

  state = {
    temp: {},
    defaultCenter: {lat: 50.45, lng: 30.52},
    center: {lat: 50.45, lng: 30.52},
  };
  map = React.createRef();

  onMapClick = () => {
    console.warn('aaa click on map');
  };

  render() {
    const {center} = this.state;
    //const {selectMarker, markers, radius, filterMarkers} = this.props;

    return (
      <div>
        <GoogleMap
          ref={this.map as any}
          defaultZoom={12}
          onClick={this.onMapClick}
          center={center}
        ></GoogleMap>
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
