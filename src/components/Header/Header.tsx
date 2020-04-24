import React, {PureComponent} from 'react';
import './Header.scss';
import {b, createBlock} from '../../helpers/bem';
import Authorization from '../Authorization/Authorization';
/*Types of places and rules - dropdown with types - on click show modal with rules
кафе, спортзал, кинотеатр, парихмахерские, стоматологические кабинеты, магазины одежды, супермаркеты

авторизация с кабинетом, - сохранение оценненых мест
кнопка заказа проверки
поле поиска
 */

const block = createBlock('Header');

export default class Header extends PureComponent {
  render() {
    return (
      <div className={b(block)}>
        <Authorization />
      </div>
    );
  }
}
