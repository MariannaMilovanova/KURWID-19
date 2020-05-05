/*
бэйдж с рейтингом
название картинка заведения
контактная информация

большая кнопка филл форм, сверху, форма выезжает
тут и будет фидбэк форма вверху
добавить карту где находится это заведение


читать все коментарии наши
спикок коментариев, первые 5 читать все
* */
import React, {PureComponent} from 'react';
import {b, createBlock} from '../../helpers/bem';
import './PlaceInformation.scss';
import {Row, Col, Container} from 'react-bootstrap';
import ImagePlaceholder from 'assets/images/comingsoon-square.png';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/esm/Figure';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import RulesModal from '../RulesModal/RulesModal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {getRatingColor} from '../../helpers';
import {Icon} from 'semantic-ui-react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

const block = createBlock('PlaceInformation');

export interface PlaceInformationProps {
    modalState: boolean;
    feedbackModalState: boolean;
}

function renderTooltip(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Click to read more about criteria to this type of place
        </Tooltip>
    );
}

export function renderTooltipSocialDistance(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
           Safe distance between people and desks is 2-3 meters, having isolated cubicles,
            staff violated the distance, reacting to the violation by warning in case of breach by the guests
        </Tooltip>
    );
}
export function renderTooltipSanitary(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>properly dressed stuff (respirator #FFP, gloves, glasses),
            disinfectants on the tables in the hall and in the bathroom,
            general sanitary</Tooltip>
    );
}
export function renderTooltipPersonnel(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>Place is mostly automated and you don't need to interact with personnel a lot</Tooltip>
    );
}
export function renderTooltipScreening(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>Screenning at the entrance</Tooltip>
    );
}
export function renderTooltipWebapp(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>Automation of process of order
        </Tooltip>
    );
}

export default class PlaceInformation extends PureComponent<{}, PlaceInformationProps> {
    state = { modalState: false, feedbackModalState: false };
    render() {
        return (
            <div className={b(block)}>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12}>
                            <h2 className="mb-4 text-dark font-weight-bold">Molodo-Zeleno</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} sm={4}>
                            <Figure className="position-relative">
                                <Figure.Image className='w-100 border' src={ImagePlaceholder} alt="Company Name"/>
                                <span className="position-absolute badge-rating"><Icon name="star" color={getRatingColor(10)} /> <span>10</span></span>
                            </Figure>
                            <h5>
                                <span className="text-secondary">Company Type: </span>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <a href="#" onClick={() => this.setState({ modalState : true})}>Cafe/Restaurant</a>
                                </OverlayTrigger>
                                <RulesModal closeModel={() => this.setState({modalState: false})} modalState={this.state.modalState} />
                            </h5>
                            <h5><span className="text-secondary">Telephone Number: </span>+78 077 077 09 77</h5>
                            <h5><span className="text-secondary">Email: </span>bestplaceever@bestplace.place</h5>
                            <h5><span className="text-secondary">Address:</span> Favorite City Leopolis</h5>
                            <h5><a target="_blank" href="https://goo.gl/maps/RuQLN2rokeumL88YA">See on map</a></h5>
                        </Col>
                        <Col md={8} sm={8}>
                            <FeedbackForm />
                            <h3 className="mt-5 mb-3">Current Security Rating Of Molodo-Zeleno:</h3>

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
