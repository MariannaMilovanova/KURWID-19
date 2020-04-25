/*тайтл оценки
кужочки (шкала) от 0 до 10
оставить коментарий
кнопка сабмит, кнопка ресет,
после сабмита спасибулина
*/

import React, {PureComponent} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export interface FeedbackFormModalProps {
    closeFeedbackModel: () => void;
    feedbackModalState: boolean;
}

export default class FeedbackForm extends PureComponent<FeedbackFormModalProps> {
    render() {
        return (
            <div>
                <Modal show={this.props.feedbackModalState}>
                    <Modal.Header>
                        <Modal.Title>Feedback Form:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4 className="mt-3">Default ratings:</h4>
                        <Form className="mt-3">
                            <Form.Group controlId="socialDistance">
                                <Form.Label>Social distance</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                            <Form.Group controlId="sanitary">
                                <Form.Label>Sanitary</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                            <Form.Group controlId="personnel">
                                <Form.Label>Personnel</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                            <Form.Group controlId="screening">
                                <Form.Label>Screening</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>

                            <h4 className="mb-3">Peculiarities:</h4>
                            <Form.Group controlId="dividersBetweenTables">
                                <Form.Label>Dividers between tables</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="primary" onClick={() => this.props.closeFeedbackModel()}>Save form</Button>
                                <Button variant="secondary" onClick={() => this.props.closeFeedbackModel()}>Close</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
