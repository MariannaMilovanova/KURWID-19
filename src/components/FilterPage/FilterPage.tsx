import React, {PureComponent} from 'react';
import {Form, Input, Label} from 'semantic-ui-react';
import {Query} from '../../helpers';
import PlacesListFiltered from '../PlacesListFiltered/PlacesListFiltered'
import './FilterPage.scss';

export default class FilterPage extends PureComponent {
  state = new (function () {
    this.Query = new Query();
  })();

  constructor(props) {
    super(props);
    const qs = props.location.search.split('&');
    const ps = {};
    for (let i = 0; i < qs.length; i++) {
      const qsv = qs[i].split('=');
      ps[qsv[0]] = qsv[1];
    }
    ps['?s'] && (this.state.Query.State.Pattern = ps['?s']);
    ps['us'] && (this.state.Query.State.RatedUs = ps['us']);
    ps['people'] && (this.state.Query.State.RatedPeople = ps['people']);
    ps['nearby'] && (this.state.Query.State.Nearby = ps['nearby']);

    if (!this.state.Query.State.Pattern) {
      this.state.Query.State.Pattern = '';
    }
  }

  render() {
    return (
      <div className={'FilterPage'}>
        <Form>
          <Form.Field>
            <Label>What venue are you trying to find?</Label>
            <Input
              placeholder="Enter venue name"
              type="text"
              name="pattern"
              defaultValue={this.state.Query.State.Pattern}
              onChange={(e) => this.state.Query.Set({Pattern: e.target.value})}
            />
          </Form.Field>
        </Form>
        <PlacesListFiltered query={this.state.Query} />
      </div>
    );
  }
}
