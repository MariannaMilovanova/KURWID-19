import React, {PureComponent} from 'react';
import {Marker} from 'react-google-maps';
import {get, noop} from 'lodash';
import blue from '../../assets/images/blue_marker.png';
import red from '../../assets/images/red_marker.png';
import green from '../../assets/images/green_marker.png';
import yellow from '../../assets/images/yellow_marker.png';
import {b, createBlock} from '../../helpers/bem';

const block = createBlock('CustomMarker');

const markerIcon = {
  blue,
  red,
  green,
  yellow,
};
export interface CustomMarkerProps {
  marker: any;
  selectMarker: (marker: any) => void;
  type?: string;
}

class CustomMarker extends PureComponent<CustomMarkerProps> {
  static defaultProps = {
    marker: {},
    selectMarker: noop,
  };

  state = {
    isOpen: false,
  };

  onToggleOpen = () => {
    const {selectMarker, marker} = this.props;
    selectMarker(marker);
  };

  render() {
    const {marker} = this.props;
    const type = get(this, 'props.type', 'yellow');

    return (
      <div className={b(block)}>
        <Marker icon={markerIcon[type]} position={marker.position} onClick={this.onToggleOpen} />
      </div>
    );
  }
}

export default CustomMarker;
