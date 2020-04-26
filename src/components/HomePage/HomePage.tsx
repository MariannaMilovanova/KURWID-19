import React, {Component} from 'react';
import {drop, take} from 'lodash';
import {Icon, Input} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Map from '../Map/Map';
import PlacesList, {Filters} from '../PlacesList/PlacesList';
import {b, createBlock} from '../../helpers/bem';
import './HomePage.scss';

const block = createBlock('HomePage');

export default class HomePage extends Component {
  state = {
    filters: ['restaurant', 'bar', 'cafe'],
    places: [],
  };
  setFiltersOnMap = (filters) => {
    this.setState({filters});
  };

  setPlacesOnMap = (places) => {
    this.setState({places});
  };
  searchChange = (e, data) => {
    e.preventDefault();
    this.setState({
      term: data.value,
    });
  };
  render() {
    const {filters, places} = this.state;

    return (
      <div className={b(block)}>
        <div className={b(block, 'heading')}>
          <Filters modificator={'map'} filters={filters} setFiltersOnMap={this.setFiltersOnMap} />
          <Input placeholder="Search venue..." onChange={this.searchChange} />
          <Link to={'/lookup'}>
            <div className={b(block, 'search-icon')}>
              <Icon name={'search'} color={'blue'} />
            </div>
          </Link>
        </div>
        <Map setPlacesOnMap={this.setPlacesOnMap} filters={filters} />
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
