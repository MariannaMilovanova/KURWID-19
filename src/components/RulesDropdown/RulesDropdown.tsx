import React from 'react';
import {Dropdown} from 'semantic-ui-react';
import {b, createBlock} from '../../helpers/bem';
import './RulesDropdown.scss';

const block = createBlock('RulesDropdown');

const options = [
  {
    key: 'Restaurant',
    text: 'Restaurant',
    value: 'Restaurant',
    image: {
      avatar: true,
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Restaurant_2_clip_art.png',
    },
  },
  {
    key: 'Cinema',
    text: 'Cinema',
    value: 'Cinema',
    image: {
      avatar: true,
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Restaurant_2_clip_art.png',
    },
  },
  {
    key: 'Hair dress',
    text: 'Hair dress',
    value: 'Hair dress',
    image: {
      avatar: true,
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Restaurant_2_clip_art.png',
    },
  },
  {
    key: 'Sport',
    text: 'Sport',
    value: 'Sport',
    image: {
      avatar: true,
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Restaurant_2_clip_art.png',
    },
  },
  {
    key: 'Shops',
    text: 'Shops',
    value: 'Shops',
    image: {
      avatar: true,
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Restaurant_2_clip_art.png',
    },
  },
];

const RulesDropdown = () => (
  <div className={b(block)}>
    <div className={b(block, 'label')}>Choose type of place to know more about rules:</div>
    <Dropdown placeholder="Choose place to read rules" selection options={options} />
  </div>
);

export default RulesDropdown;
