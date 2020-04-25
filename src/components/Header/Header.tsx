import React, {PureComponent} from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {Image} from 'semantic-ui-react';
import {b, createBlock} from '../../helpers/bem';
import Authorization from '../Authorization/Authorization';
import RulesDropdown from '../RulesDropdown/RulesDropdown';
import Logo from '../../assets/images/logo.png';
import Nav from 'react-bootstrap/Nav';
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
          <Link
            to={{
              pathname: '/',
            }}
          >
            <Image src={Logo} size="medium" title={'logo'} wrapped fluid centered rounded />
          </Link>
            <Nav activeKey="/">
                // TODO
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/place">Place</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/about-us">About us</Nav.Link>
                </Nav.Item>
            </Nav>
          <div className={b(block, 'about-us')}>
            <Link
              to={{
                pathname: '/about-us',
              }}
            >
              About Us
            </Link>
          </div>
        </div>
         <RulesDropdown />
        <Authorization />
      </div>
    );
  }
}
