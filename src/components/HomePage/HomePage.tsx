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
    filters: ['cafe'],
    places: [],
    allFilters: ['cafe'],
  };
  setFiltersOnMap = (filters) => {
    this.setState({filters});
  };

  setAllFilters = (allFilters) => {
    this.setState({allFilters});
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
    const {filters, places, allFilters} = this.state;

    return (
      <div className={b(block)}>
        <div className={b(block, 'heading')}>
          <Input placeholder="Search venue..." onChange={this.searchChange} />
          <Link to={'/lookup'}>
            <div className={b(block, 'search-icon')}>
              <Icon name={'search'} color={'blue'} />
            </div>
          </Link>
        </div>
        <PlacesList
          label={'Security Rating of Places in Lviv'}
          icon={'child'}
          iconColor={'teal'}
          filters={filters}
          allFilters={allFilters}
          setAllFilters={this.setAllFilters}
          setFiltersOnMap={this.setFiltersOnMap}
          places={take(drop(places, 8), 7)}
        />
        <Filters
          modificator={'map'}
          filters={filters}
          setFiltersOnMap={this.setFiltersOnMap}
          allFilters={allFilters}
          setAllFilters={this.setAllFilters}
        />
        <Map setPlacesOnMap={this.setPlacesOnMap} filters={filters} />
        <PlacesList
          label={'Places Rated By Us'}
          icon={'chess knight'}
          iconColor={'blue'}
          places={take(drop(places, 4), 7)}
          filters={filters}
          allFilters={allFilters}
          setAllFilters={this.setAllFilters}
          setFiltersOnMap={this.setFiltersOnMap}
        />
        <PlacesList
          label={'Places Near You'}
          icon={'home'}
          iconColor={'olive'}
          places={take(drop(places, 1), 7)}
          filters={filters}
          setAllFilters={this.setAllFilters}
          allFilters={allFilters}
          setFiltersOnMap={this.setFiltersOnMap}
        />
      </div>
    );
  }
}
