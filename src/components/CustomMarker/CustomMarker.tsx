import React, {PureComponent} from 'react';
import {Marker} from 'react-google-maps';
import {get, noop} from 'lodash';
import {InfoWindow} from 'react-google-maps';
//import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import blue from '../../assets/images/blue_marker.png';
import red from '../../assets/images/red_marker.png';
import green from '../../assets/images/green_marker.png';
import orange from '../../assets/images/yellow_marker.png';
import './CustomMarker.scss';
import {b, createBlock} from '../../helpers/bem';
import {Place} from '../PlacesList/PlacesList';

const block = createBlock('CustomMarker');

const markerIcon = {
  blue,
  red,
  green,
  orange,
};
export interface CustomMarkerProps {
  marker: any;
  selectMarker: (marker: any) => void;
  type?: string;
  currentLocation?: boolean;
}

class CustomMarker extends PureComponent<CustomMarkerProps> {
  static defaultProps = {
    marker: {},
    selectMarker: noop,
  };

  state = {
    isOpen: false,
  };

  onClick = () => {
    const {marker} = this.props;
    console.warn('onClick');
    this.setState({isOpen: marker.id});
  };
  onCloseClick = () => {
    const {marker} = this.props;
    console.warn('onClose');
    this.setState({isOpen: marker.id});
  };

  render() {
    const {marker, currentLocation} = this.props;
    const {position} = marker;
    const {isOpen} = this.state;
    const type = get(this, 'props.type', 'yellow');

    if (currentLocation) {
      console.warn(marker)
      return (
        <div className={b(block)}>
          {isOpen && (
            <Marker icon={markerIcon[type]} position={position} onClick={this.onClick}>
              <InfoWindow position={position} onCloseClick={this.onCloseClick}>
                <div className={b(block, 'current-location')}>You are here!</div>
              </InfoWindow>
            </Marker>
          )}
        </div>
      );
    }

    return (
      <div className={b(block)}>
        <Marker icon={markerIcon[type]} position={position} onClick={this.onClick}>
          {isOpen && (
            <InfoWindow
              position={new google.maps.LatLng(position.lat, position.lng)}
              onCloseClick={this.onCloseClick}
            >
              <div className={b(block, 'marker-infoBox')}>
                <Place {...marker} />
              </div>
            </InfoWindow>
          )}
        </Marker>
      </div>
    );
  }
}

export default CustomMarker;
