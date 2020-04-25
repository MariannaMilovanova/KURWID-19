/* информация о нас, контактные данные опизание нашего предложение проверки места, что она подразумевает, и форма связи* / */
import React, {PureComponent} from 'react';
 import {b, createBlock} from '../../helpers/bem';
import {Input, Button, Form, Container, Header, Segment} from 'semantic-ui-react';
import './AboutUs.scss';

 const block = createBlock('AboutUs');
export interface AboutUsInterface {
  errors?: any;
  e?: any;
}

export default class AboutUs extends PureComponent<AboutUsInterface> {
  state = {
    companyName: '',
    contactName: '',
    phone: '',
    address: '',
    email: '',
    comment: '',
    errors: {},
  };

  checkForm = () => {
    const {companyName, contactName, phone, address} = this.state;
    if (companyName && contactName && phone && address) {
      return true;
    }
    return false;
  };

  sendOrder = (e: any) => {
    e.preventDefault();

    const errors = {
      companyName: '',
      contactName: '',
      phone: '',
      address: '',
      email: '',
      comment: '',
    };
    const {companyName, contactName, phone, address, email} = this.state;

    if (companyName === '') {
      errors.companyName = 'Company name should be set';
    }
    if (contactName === '') {
      errors.contactName = 'Contact name should be set';
    }

    if (phone === '') {
      errors.phone = 'Phone number should be set';
    }

    if (address === '') {
      errors.address = 'Address of place should be set';
    }

    if (email === '') {
      errors.address = 'Company email should be set';
    }

    const isValid = Object.keys(errors).length === 0;

    this.setState({errors: errors, isValid: isValid});
  };

  render() {
    const isValid = this.checkForm();

    return (
      <Container className={b(block)}>
        <h2 className="mt-4">How the security check will be happening?</h2>
        <p className="text-secondary">
          We will be visiting your facility few times a week for 2-3 weeks, incognito. Each time we will check the
          institution against the criteria that match your type of institution. When we have a complete picture,
          we will publish a full report about your institution, in the "Auditor" section. Also on the homepage of our
          site you will be placed in the appropriate place in our personal rating "Places Rated By Us", indicating
          the exact date of the inspection and the level of security of your institution for the moment of that date. Our report do not have direct
          affect to the evaluation of the users of our site, but if you have everything safe, our site will be able to
          draw attention to it to your potential visitors.</p>
        <Header as="h1" textAlign="center" className="mt-5">
          Order check certification COVID-19
        </Header>
        <Segment>
          <Form>
            <Form.Field>
              <Input
                placeholder="Company name"
                type="text"
                name="name"
                value={this.state.companyName}
                onChange={(e) => this.setState({companyName: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Contact person name"
                type="text"
                name="name"
                value={this.state.contactName}
                onChange={(e) => this.setState({contactName: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Phone number: +380 1234567"
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={(e) => this.setState({phone: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Address of place: Lviv, Rynok Square 1"
                type="text"
                name="address"
                value={this.state.address}
                onChange={(e) => this.setState({address: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Email: kriyvka@hermail.com"
                type="email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Add some additional information we should know"
                type="textarea"
                name="comment"
                value={this.state.comment}
                onChange={(e) => this.setState({comment: e.target.value})}
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
