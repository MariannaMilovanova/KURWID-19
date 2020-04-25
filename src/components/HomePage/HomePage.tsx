import React, {PureComponent} from 'react';
import Map from '../Map/Map';
import {b, createBlock} from '../../helpers/bem';
import './HomePage.scss';

const block = createBlock('HomePage');

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={b(block)}>
        <Map />
      </div>
    );
  }
}
