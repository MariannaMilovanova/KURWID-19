import React, {Component} from 'react';
import {drop, take} from 'lodash';
import Map from '../Map/Map';
import PlacesList, {Filters} from '../PlacesList/PlacesList';
import {b, createBlock} from '../../helpers/bem';
import './HomePage.scss';

const block = createBlock('HomePage');

export default class HomePage extends Component {
  state = {
    filters: [],
    places: [],
  };
  setFiltersOnMap = (filters) => {
    this.setState({filters});
  };

  setPlacesOnMap = (places) => {
    this.setState({places});
  };
  render() {
    const {filters, places} = this.state;

    return (
      <div className={b(block)}>
        <Filters modificator={'map'} filters={filters} setFiltersOnMap={this.setFiltersOnMap} />
        <Map setPlacesOnMap={this.setPlacesOnMap} />
        <PlacesList
          label={'Places Rated By Us'}
          icon={'chess knight'}
          iconColor={'blue'}
          places={take(drop(places, 4), 7)}
        />
        <PlacesList
          label={'Best Places in Lviv'}
          icon={'child'}
          iconColor={'teal'}
          places={take(drop(places, 8), 7)}
        />
        <PlacesList
          label={'Places Near You'}
          icon={'home'}
          iconColor={'olive'}
          places={take(drop(places, 1), 7)}
        />
      </div>
    );
  }
}
