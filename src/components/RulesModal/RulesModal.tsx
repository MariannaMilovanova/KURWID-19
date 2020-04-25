import React, {PureComponent} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// const block = createBlock('PlaceInformation');

export interface ModalStateProps {
  modalState: boolean;
  closeModel: () => void;
}

export default class RulesModal extends PureComponent<ModalStateProps> {

  render() {
    return (
        <div>
          <Modal show={this.props.modalState}>
            <Modal.Header>
              <Modal.Title>Ratings:</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-4">
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Social distance
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>To be safe during this time it's important to maintain social distance. It's harder to do in a public places, thus we would prefer a place which have such distancing organized.
                      Relatively safe distance between people is 2-3 meters. But you may refer to your local recommendations to rate a venue. Lowest point is when you're forced to seat next to multiple persons for a long time. Highest is when during all your visit you have a possibility to maintain 2-3 meter or more distance, having isolated cubicles, etc.</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Sanitary
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>In addition to overall cleanliness expected from public venues it's become important to have frequent disinfection, better ventilation, antiseptics available for guests at the entrance and at the seat. Lowest point is when during your visit you haven't seen any sanitary actions (disinfection, cleaning) and no items for guest are available. Highest is when cleaning and disinfection happen after each visitor and you have all means to perform any additional sanitary actions that you need.</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Personnel
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Venue personnel are people whom we'll contact most closely. Highest point is when venue is mostly automated and you don't need to interact with personnel. Or if there are personnel - they wear high level protection: face masks or respirators, gloves, costumes. All disposable protection is properly disposed after max 2 hours of use. Lowest point is when personnel have no protection at all, doesn't maintain reasonable distance with guests.</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      Screening (Optional rating)
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>We believe that people who have fever won't be going to public places, but it's always better to be sure. Thermal scanning of visitors at the entrance is a good precaution. Lowest point is absence of thermal scanning. Middle in case of random pick scanning by security. Highest in case of all visitors thermal check via contactless thermometers or there are stationary thermal scanners.</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <h5 className="mt-4">Peculiarities</h5>
                <Accordion>
                  <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Menu available online via WebApp
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Instead of contagious physical menu you can use your phone to make an order.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.props.closeModel()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
  }
}
