/* информация о нас, контактные данные опизание нашего предложение проверки места, что она подразумевает, и форма связи* / */
import React, {PureComponent} from 'react';
 import {b, createBlock} from '../../helpers/bem';
import {Input, Button, Form, Label, Container, Header, Segment} from 'semantic-ui-react';
import './AboutUs.scss';

 const block = createBlock('AboutUs');
export interface AboutUsInterface {
  errors?: any;
  e?: any;
}

export default class AboutUs extends PureComponent<AboutUsInterface> {
  state = {
    name: '',
    phone: '',
    address: '',
    errors: {},
  };

  checkForm = () => {
    const {name, phone, address} = this.state;
    if (name && phone && address) {
      return true;
    }
    return false;
  };

  sendOrder = (e: any) => {
    e.preventDefault();

    const errors = {
      name: '',
      phone: '',
      address: '',
    };
    const {name, phone, address} = this.state;

    if (name === '') {
      errors.name = 'Нужно указать имя';
    }

    if (phone === '') {
      errors.phone = 'Нужно указать телефон';
    }

    if (address === '') {
      errors.address = 'Нужно указать адрес заведения';
    }

    const isValid = Object.keys(errors).length === 0;

    this.setState({errors: errors, isValid: isValid});
  };

  render() {
    const isValid = this.checkForm();

    return (
      <Container className={b(block)}>
        <Header as="h1" textAlign="center">
          Order check certification COVID-19
        </Header>
        <Segment>
          <Form>
            <Form.Field>
              <Label>Name</Label>
              <Input
                placeholder="Enter your name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Label>Phone</Label>
              <Input
                placeholder="+380 1234567"
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Label>Enter address</Label>
              <Input
                placeholder="Lviv, Rynok Square 1"
                type="text"
                name="address"
                value={this.state.address}
                onChange={(e) => this.setState({address: e.target.value})}
              />
            </Form.Field>
            <Button primary={isValid} onClick={this.sendOrder}>
              Send
            </Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}
