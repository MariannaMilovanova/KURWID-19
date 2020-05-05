import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ImageDimLegend from 'assets/images/dinlegend.jpg';
import ImageMaisterniaShokoladu from 'assets/images/lvivska-maisternia-shokoladu.jpeg';
import ImageKryivka from 'assets/images/kryivka.jpg';
import CardDeck from 'react-bootstrap/CardDeck';
import {Container, Row} from 'react-bootstrap';
import './BlogPage.scss';
import {b, createBlock} from '../../helpers/bem';

const block = createBlock('BlogPage');

export default class BlogPage extends PureComponent {
  state = {modalState: false, feedbackModalState: false};

  render() {
    return (
        <div className={b(block)}>
          <Container className="mt-5">
            <Row>
            <CardDeck>
              <Card>
                <div className="img-wrapper">
                  <Card.Img variant="top" src={ImageMaisterniaShokoladu} />
                </div>
                <Card.Body>
                  <h5 className="font-weight-bold">26.04.2020</h5>
                  <Card.Title>Lvivska Maisternia Shokoladu Security check results</Card.Title>
                  <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                  </Card.Text>

                  <Link to={'/review#1'}> Read more</Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <div className="img-wrapper">
                  <Card.Img variant="top" src={ImageDimLegend} />
                </div>
                <Card.Body>
                  <h5 className="font-weight-bold">22.04.2020</h5>
                  <Card.Title>Dim Legend Security check results</Card.Title>
                  <Card.Text>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magn
                  </Card.Text>
                  <Link to={'/review#1'}> Read more</Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <div className="img-wrapper">
                 <Card.Img variant="top" src={ImageKryivka} />
                </div>
                <Card.Body>
                  <h5 className="font-weight-bold">16.04.2020</h5>
                  <Card.Title>Kryivka security check results</Card.Title>
                  <Card.Text>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  </Card.Text>
                  <Link to={'/review#1'}> Read more</Link>
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
