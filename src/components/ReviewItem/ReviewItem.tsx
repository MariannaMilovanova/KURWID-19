import React, {PureComponent} from 'react';
import Form from 'react-bootstrap/Form';
import {b, createBlock} from '../../helpers/bem';
import {Col, Container, Row} from 'react-bootstrap';
import ImageMaisterniaShokoladu from 'assets/images/lvivska-maisternia-shokoladu.jpeg';
import {Image} from 'semantic-ui-react';
import './ReviewItem.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  renderTooltipPersonnel,
  renderTooltipSanitary, renderTooltipScreening,
  renderTooltipSocialDistance, renderTooltipWebapp
} from '../PlaceInformation/PlaceInformation';

const block = createBlock('ReviewItem');

export default class ReviewItem extends PureComponent {
  render() {
    return (
        <div className={b(block)}>
          <Container className="mt-5">
            <Row>
              <Col sm={12}>
                <h2 className="mb-4 text-dark font-weight-bold">Lvivska Kopalnia Kavy</h2>
              </Col>
              <Col sm={12}>
                <Image src={ImageMaisterniaShokoladu} className="text-image"/>
                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                  born and I will give you a complete account of the system, and expound the actual teachings of the great
                  explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
                  pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure
                  rationally encounter consequences that are extremely painful. Nor again is there anyone who loves
                  or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                  circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial
                  example, which of us ever undertakes laborious physical exercise, except to obtain some advantage
                  from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no
                  annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                  <li>Aliquam tincidunt mauris eu risus.</li>
                  <li>Vestibulum auctor dapibus neque.</li>
                </ul>
                <ol>
                  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                  <li>Aliquam tincidunt mauris eu risus.</li>
                  <li>Vestibulum auctor dapibus neque.</li>
                </ol>
                <dl>
                  <dt>Definition list</dt>
                  <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</dd>
                  <dt>Lorem ipsum dolor sit amet</dt>
                  <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</dd>
                </dl>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col sm={12}>
                <h3 className="mt-5 mb-3">Current Security Rating Of Lvivska Maisternia Shokolady:</h3>

                <h5>Social distance &nbsp;
                  <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltipSocialDistance}>
                    <a href="#">?</a>
                  </OverlayTrigger>
                </h5>
                <ProgressBar now={98} variant="success" className="mb-3"/>
                <h5>Sanitary &nbsp;
                  <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltipSanitary}>
                    <a href="#">?</a>
                  </OverlayTrigger>
                </h5>
                <ProgressBar now={54} variant="warning" className="mb-3"/>
                <h5>Personnel &nbsp;
                  <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltipPersonnel}>
                    <a href="#">?</a>
                  </OverlayTrigger>
                </h5>
                <ProgressBar now={41} variant="danger" className="mb-3"/>
                <h5>Screening (Optional rating) &nbsp;
                  <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltipScreening}>
                    <a href="#">?</a>
                  </OverlayTrigger>
                </h5>
                <ProgressBar now={99} variant="success" className="mb-3"/>
                <h4 className="mt-5 mb-3">Specials</h4>
                <h5>Menu available online via WebApp &nbsp;
                  <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltipWebapp}>
                    <a href="#">?</a>
                  </OverlayTrigger>
                </h5>
                <ProgressBar now={88} variant="success"/>
              </Col>
            </Row>
          </Container>

          <Container className="mt-5">
            <Row>
              <Col md={12} sm={12}>
                <h2 className="mb-3">Comments</h2>

                <Card className="mt-4">
                  <Card.Header>Quote</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.{' '}
                      </p>
                      <footer className="blockquote-footer">
                        Someone famous, 25.04.2020, 18:21
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card className="mt-4">
                  <Card.Header>Quote</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.{' '}
                      </p>
                      <footer className="blockquote-footer">
                        Someoneelse famous, 25.04.2020, 15:44
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>

                <h4 className="mt-5">Add Comment</h4>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button className="mt-4" variant="primary">Save form</Button>
                </Form>

              </Col>

            </Row>
          </Container>
        </div>
    );
  }
}
