import React, {PureComponent} from 'react';
// import {b, createBlock} from '../../helpers/bem';
import Card from 'react-bootstrap/Card';
import ImagePlaceholder from 'assets/images/comingsoon-square.png';
import CardDeck from 'react-bootstrap/CardDeck';
import {Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// const block = createBlock('PlaceInformation');

export default class BlogPage extends PureComponent {
  state = {modalState: false, feedbackModalState: false};

  render() {
    return (
        <div>
          <Container className="mt-5">
            <Row>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={ImagePlaceholder} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Button variant="primary" size="lg" className="mt-3 text-center">
                    Read more
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={ImagePlaceholder} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                  <Button variant="primary" size="lg" className="mt-3 text-center">
                    Read more
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={ImagePlaceholder} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                  <Button variant="primary" size="lg" className="mt-3 text-center">
                    Read more
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
            </Row>
          </Container>
        </div>
    )
  }
}
