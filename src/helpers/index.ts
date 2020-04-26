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

export const styles = [
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export function Query() {
  this.State = {};
  this.Set = function (val: any) {
    val.Pattern != null && (this.State.Pattern = val.Pattern);
    val.RatedUs != null && (this.State.RatedUs = val.RatedUs);
    val.RatedPeople != null && (this.State.RatedPeople = val.RatedPeople);
    val.Nearby != null && (this.State.Nearby = val.Nearby);
    this.Change && this.Change();
  };
}
