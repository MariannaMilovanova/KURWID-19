import React, {PureComponent} from 'react';
import Map from '../Map/Map';
import PlacesList, {Filters} from '../PlacesList/PlacesList';
import {b, createBlock} from '../../helpers/bem';
import './HomePage.scss';

const block = createBlock('HomePage');

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={b(block)}>
        <Filters modificator={'map'} />
        <Map />
        <PlacesList label={'Places Rated By Us'} icon={'chess knight'} iconColor={'blue'} />
        <PlacesList label={'Best Places Rated By People'} icon={'child'} iconColor={'teal'} />
        <PlacesList label={'Places Near You'} icon={'home'} iconColor={'olive'} />
      </div>
    );
  }
}
