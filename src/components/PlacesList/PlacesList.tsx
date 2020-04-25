import React from 'react';
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
        <Image src={pictureURL} size="small" title={name} wrapped centered circular />
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
      <Filters modificator={'row'} />
    </div>
    <div className={b(block, 'places')}>
      {map(places, (place, key) => (
        <Link to={'/place'} key={key}>
          <Place {...place} />
        </Link>
      ))}
      <div className={b(block, 'see-all')}>See All</div>
    </div>
  </div>
);

export default PlacesList;
