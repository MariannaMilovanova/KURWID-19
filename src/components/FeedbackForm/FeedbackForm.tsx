/*тайтл оценки
кужочки (шкала) от 0 до 10
оставить коментарий
кнопка сабмит, кнопка ресет,
после сабмита спасибулина
*/

import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import {Rating} from 'semantic-ui-react';
import {Col} from 'react-bootstrap';


const FeedbackForm = () => {
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);
    return (
        <div>
            <div className={hide ? 'd-none' : ''}>
                <h2 className="my-3">Please, answer on a few questions to help us to evaluate if the place is safe:</h2>
                <Form>
                    <Form.Group controlId="desksDistance" className='row'>
                        <Form.Label className="mt-1 col-9">Did you notice that there was a distance of at least 2 meters between the tables?</Form.Label>
                        <Col sm={3}>
                            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="wearing" className='row'>
                        <Form.Label className="mt-1 col-9">Have the staff been properly dressed (respirator #FFP, gloves, glasses)?</Form.Label>
                        <Col sm={3}>
                            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="socialDistance" className='row'>
                        <Form.Label className="mt-1 col-9">Whether staff violated the distance, or reacted to the violation of the distance
                            by warning in case of breach by the guests of the establishment?</Form.Label>
                        <Col sm={3}>
                            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="disinfectants" className='row'>
                        <Form.Label className="mt-1 col-9">Did you notice the disinfectants on the tables in the hall and in the bathroom?</Form.Label>
                        <Col sm={3}>
                            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="sanitary" className='row'>
                        <Form.Label className="mt-1 col-9">How high was the general sanitary level of this place?</Form.Label>
                        <Col sm={3}>
                            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="screening" className='row'>
                        <Form.Label className="mt-1 col-9">Have you been screened at the entrance to the place?</Form.Label>
                        <Col sm={3}>
                            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                        </Col>
                    </Form.Group>

                    <h4 className="mb-3">Specials:</h4>
                    <Form.Group controlId="dividersBetweenTables" className='row'>
                        <Form.Label className="mt-1 col-9">Whether it was possible to order food using WebApp?</Form.Label>
                        <Col sm={3}>
                            <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
                        </Col>
                    </Form.Group>

                    <h4 className="mb-3">May be, you have noticed some other good practices at this place that help stop the spread of coronavirus?</h4>
                    <Form.Check type="checkbox" label="Yes" />
                    <InputGroup className="mt-3">
                        <FormControl as="textarea" aria-label="With textarea" placeholder="If yes, describe it please to make it possible to ather places to adopt this idea" />
                    </InputGroup>
                    <Button className="mt-4" variant="primary" onClick={() => {setHide(true); setShow(true)}}>Save form</Button>
                </Form>
            </div>
            <Toast className="toast-center bg-success" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Body>
                    <h3><strong className="text-light text-center">Thank you for your feedback!</strong></h3>
                    <h4 className="text-light text-center">Each feedback helps to stop coronavirus!</h4>
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default FeedbackForm
