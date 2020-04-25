import React, {PureComponent} from 'react';
import Map from '../Map/Map';
import PlacesList from '../PlacesList/PlacesList';
import {b, createBlock} from '../../helpers/bem';
import './HomePage.scss';
import Footer from '../Footer/Footer';

const block = createBlock('HomePage');

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={b(block)}>
        <PlacesList label={'Places Rated By Us'} icon={'chess knight'} iconColor={'blue'} />
        <PlacesList label={'Best Places Rated By People'} icon={'child'} iconColor={'teal'} />
        <PlacesList label={'Places Near You'} icon={'home'} iconColor={'olive'} />
        <Map />
		<Footer></Footer>
      </div>
    );
  }
}
