/* информация о нас, контактные данные опизание нашего предложение проверки места, что она подразумевает, и форма связи* / */
import React, {PureComponent} from 'react';
import {b, createBlock} from '../../helpers/bem';
import './AboutUs.scss';

const block = createBlock('AboutUs');

export default class AboutUs extends PureComponent {
  render() {
    return <div className={b(block)}>About Us</div>;
  }
}
