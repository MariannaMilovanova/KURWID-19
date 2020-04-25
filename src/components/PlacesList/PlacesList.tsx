import React, { PureComponent } from 'react';
import {map} from 'lodash';
import {Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';
import {Header, Icon} from 'semantic-ui-react';
import {b, createBlock} from '../../helpers/bem';
import {filters, places} from '../../helpers/mock';
import {getRatingColor} from '../../helpers';
import './PlacesList.scss';

/*
фильтр - dropdown с типо заведения
в одну строку, see all отдельная страница со всеми заведениями (второстепенно)
Дату у кожний кубік, щоб було видно, чи взагалі то актуально

кубик заведение: название, дистанция, рейтинг (no marks, макс 10, мин 0, окрашиваться по цветам)

помимо best rated, near you, строчка rated by you
строчка с самого верха места оценненые нами, дата оценки

*/
const block = createBlock('PlacesList');

const Place = ({name, address, rating, pictureURL}) => (
  <div className={b(block, 'place')}>
    <div className={b(block, 'name')}>{name}</div>
    {pictureURL && (
      <div className={b(block, 'image')}>
        <Image src={pictureURL} size="small" title={name} wrapped fluid centered circular />
      </div>
    )}
    <div className={b(block, 'address')}>{address}</div>
    <div className={b(block, 'rating')}>
      Rating: {rating} <Icon name="star" color={getRatingColor(rating)} />
    </div>
  </div>
);

export const Filters = ({modificator}) => (
  <div className={b(block, 'filters', [modificator])}>
    {map(filters, (filter, key) => (
      <div className={b(block, 'filter')} key={key}>
        <Checkbox label={filter.label} defaultChecked={filter.defaultChecked} />
      </div>
    ))}
  </div>
);

const PlacesList = ({label, icon, iconColor}) => (
  <div className={b(block)}>
    <div className={b(block, 'header')}>
      <Header as="h2">
        <Icon name={icon} color={iconColor} />
        <Header.Content>{label}</Header.Content>
      </Header>
    </div>
    <Filters modificator={'row'} />
    <div className={b(block, 'places')}>
      {map(places, (place, key) => (
        <Link
          to={{
            pathname: '/place',
          }}
        >
          <Place {...place} key={key} />
        </Link>
      ))}
      <div className={b(block, 'see-all')}>See All</div>
    </div>
  </div>
);

export interface PlacesListFilteredInterface {
    query?: any;
}

export function Query() {
    this.State = { };
    this.Set = function (val: any) {
        val.Pattern != null && (this.State.Pattern = val.Pattern);
        val.RatedUs != null && (this.State.RatedUs = val.RatedUs);
        val.RatedPeople != null && (this.State.RatedPeople = val.RatedPeople);
        val.Nearby != null && (this.State.Nearby = val.Nearby);
        this.Change && this.Change();
    }
}

export class PlacesListFiltered extends PureComponent<PlacesListFilteredInterface> {

    state = {
        Pattern: '',
        RatedUs: false,
        RatedPeople: false,
        Nearby: false,
    }

    constructor(props) {
        super(props);
        var q = props.query;
        var self = this;
        q.Change = function () {
            self.setState(q.State);
        }
        this.state = q.State;
    }

    render() {
        var filteredPlaces = places.filter(p => p.name.indexOf(this.state.Pattern) != -1);
        if (this.state.RatedUs) {
            filteredPlaces = filteredPlaces.filter(p => p.RatedUs);
        }
        if (this.state.RatedPeople) {
            filteredPlaces = filteredPlaces.filter(p => p.RatedPeople);
        }
        if (this.state.Nearby) {
            filteredPlaces = filteredPlaces.filter(p => p.Nearby);
        }

        return (<div className="PlacesListFiltered"> {
            map(filteredPlaces, (place, key) => (
                <Link to={{ pathname: '/place', }}>
                    <Place {...place} key={key} />
                </Link>
            ))
        }
        </div>);
    }
}

export default PlacesList;
