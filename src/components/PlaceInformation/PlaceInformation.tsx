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
// import {b, createBlock} from '../../helpers/bem';
import './PlaceInformation.scss';
import {Row, Col, Container} from 'react-bootstrap';
import ImagePlaceholder from 'assets/images/comingsoon-square.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/esm/Figure';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import RulesModal from '../RulesModal/RulesModal';
import ProgressBar from 'react-bootstrap/ProgressBar';

// const block = createBlock('PlaceInformation');

export interface PlaceInformationProps {
    modalState: boolean;
    feedbackModalState: boolean;
}
export default class PlaceInformation extends PureComponent<{}, PlaceInformationProps> {
    state = { modalState: false, feedbackModalState: false };
    render() {
        return (
            <div>
                {/*<h2 className={b(block)}>Place Information</h2>;*/}
                <Container className="mt-5">
                    <Row>
                        <Col md={2} sm={2}>
                            <Figure className="position-relative">
                                <Figure.Image className='w-100 border' src={ImagePlaceholder} alt="Company Name"/>
                                <span className="badge-success position-absolute badge-rating">10</span>
                            </Figure>
                        </Col>
                        <Col md={8} sm={8}>
                            <h3 className="mb-4"><span className="text-info">Company Name:</span> Molodo Zeleno</h3>
                            <h4>
                                <span className="text-secondary">Company Type:</span> Cafe/Restaurant <br/>
                                <a href="#" className="d-inline-block btn-link"  onClick={() => this.setState({ modalState : true})}>
                                    <small>Read criteria for current type of place</small>
                                </a>
                                <RulesModal closeModel={() => this.setState({modalState: false})} modalState={this.state.modalState} />
                            </h4>
                            <h4 className="mt-3"><span className="text-secondary">Address:</span> Favorite City Leopolis</h4>
                            <Button variant="primary" size="lg" className="mt-3 text-center"  onClick={() => this.setState({ feedbackModalState : true})}>
                                Fill Feedback Form
                            </Button>
                            <FeedbackForm closeFeedbackModel={() => this.setState({feedbackModalState: false})} feedbackModalState={this.state.feedbackModalState} />
                            <h3 className="mt-4">Rating:</h3>
                            <span>Social distance</span>
                            <ProgressBar now={98} variant="success" className="mb-3"/>
                            <span>Sanitary</span>
                            <ProgressBar now={54} variant="warning" className="mb-3"/>
                            <span>Personnel</span>
                            <ProgressBar now={41} variant="danger" className="mb-3"/>
                            <span>Screening (Optional rating)</span>
                            <ProgressBar now={99} variant="success" className="mb-3"/>
                            <h4 className="mt-3">Peculiarities</h4>
                            <span>Menu available online via WebApp</span>
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
                        </Form>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}
