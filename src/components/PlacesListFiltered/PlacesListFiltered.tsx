import React, {PureComponent} from 'react';
import {map} from 'lodash';
import {Link} from 'react-router-dom';
import {Place} from '../PlacesList/PlacesList';
import {places} from '../../helpers/mock';
import '../PlacesList/PlacesList.scss';

export interface PlacesListFilteredInterface {
  query?: any;
}

export default class PlacesListFiltered extends PureComponent<PlacesListFilteredInterface> {
  state = {
    Pattern: '',
    RatedUs: false,
    RatedPeople: false,
    Nearby: false,
  };

  constructor(props) {
    super(props);
    const q = props.query;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    q.Change = function () {
      self.setState(q.State);
    };
    this.state = q.State;
  }

  render() {
    let filteredPlaces = places.filter((p) => p.name.indexOf(this.state.Pattern) != -1);

    if (this.state.RatedUs) {
      filteredPlaces = filteredPlaces.filter((p) => p.RatedUs);
    }

    if (this.state.RatedPeople) {
      filteredPlaces = filteredPlaces.filter((p) => p.RatedPeople);
    }

    if (this.state.Nearby) {
      filteredPlaces = filteredPlaces.filter((p) => p.Nearby);
    }

    return (
      <div className="PlacesListFiltered">
        {' '}
        {map(filteredPlaces, (place, key) => (
          <Link to={{pathname: '/place'}} key={key}>
            <Place {...place}/>
          </Link>
        ))}
      </div>
    );
  }
}
