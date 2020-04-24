import React, {PureComponent} from 'react';
import {b, createBlock} from '../../helpers/bem';
import './HomePage.scss';

const block = createBlock('HomePage');

export default class HomePage extends PureComponent {
  render() {
    return <div className={b(block)}>Home Page</div>;
  }
}
