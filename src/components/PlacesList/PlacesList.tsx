import React from 'react';
import {map, noop, pull} from 'lodash';
import {Checkbox} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Header, Icon} from 'semantic-ui-react';
import {b, createBlock} from '../../helpers/bem';
import {filters} from '../../helpers/mock';
import {getRatingColor} from '../../helpers';
import defaultPlacePhoto from '../../assets/images/defaultPlacePhoto.jpg';
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

export const Place = ({name, address, photo, rating}) => {
  return (
    <div>
      <Link to={'/place'}>
        <div className={b(block, 'place')}>
          <div className={b(block, 'name')} title={name}>
            {name}
          </div>
          <div className={b(block, 'image')}>
            <div
              className={b(block, 'image-block')}
              style={{
                backgroundImage: `url(${photo || defaultPlacePhoto})`,
              }}
            />
          </div>
          <div className={b(block, 'address')} title={address}>
            {address}
          </div>
          <div className={b(block, 'rating')}>
            Rating: {rating} <Icon name="star" color={getRatingColor(rating)} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export const Filters = ({modificator, filters: mapFilters, setFiltersOnMap}) => {
  console.warn(mapFilters, setFiltersOnMap);

  return (
    <div className={b(block, 'filters', [modificator])}>
      {map(filters, (filter, key) => (
        <div className={b(block, 'filter')} key={key}>
          <Checkbox
            label={filter.label}
            defaultChecked={filter.defaultChecked}
            onChange={(e, data) => {
              e.preventDefault();
              if (data.checked) {
                return setFiltersOnMap([...mapFilters, ...filter.value]);
              }

              return setFiltersOnMap(pull(mapFilters, ...filter.value));
            }}
          />
        </div>
      ))}
    </div>
  );
};

export const PlacesList = ({label, icon, iconColor, places}) => {
  return (
    <div className={b(block)}>
      <div className={b(block, 'header')}>
        <Header as="h2">
          <Icon name={icon} color={iconColor} />
          <Header.Content>{label}</Header.Content>
        </Header>
        <Filters modificator={'row'} setFiltersOnMap={noop} filters={[]} />
      </div>
      <div className={b(block, 'places')}>
        {map(places, (place, key) => (
          <Place {...place} key={key} />
        ))}
        <Link to={'/lookup'}>
          <div className={b(block, 'see-all')}>See All</div>
        </Link>
      </div>
    </div>
  );
};

export default PlacesList;
