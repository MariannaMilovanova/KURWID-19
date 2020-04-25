import {inRange} from 'lodash';

export const getRatingColor = (rating: number): any => {
  if (inRange(rating, 0, 6)) {
    return 'red';
  }

  if (inRange(rating, 6, 8)) {
    return 'orange';
  }

  return 'green';
};
