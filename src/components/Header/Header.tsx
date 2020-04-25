import React, {PureComponent} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';
import {b, createBlock} from '../../helpers/bem';
import Authorization from '../Authorization/Authorization';
import Logo from '../../assets/images/logo.png';
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
        <div className={b(block, 'logo-block')}>
          <Link to={'/'}>
            <Image src={Logo} size="medium" title={'logo'} wrapped centered rounded />
          </Link>
          <div className={b(block, 'navigations')}>
            <Link to={'/'}> Home</Link>
            <Link to={'/blog'}> Revizor</Link>
            <Link to={'/about-us'}> About us</Link>
          </div>
        </div>

        <Link className="btn-success btn-lg" to={'/about-us'}> Request Professional Estimation</Link>
        <Authorization />
      </div>
    );
  }
}
