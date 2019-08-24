import React from 'react';
import { useState } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap';



function ModalComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Schedule A Viewing
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request a showing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email " placeholder="Enter Email" required />
            </Form.Group>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Schedule a time</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option val="10">10am</option>
                  <option val="11">11am</option>
                  <option val="12">12pm</option>
                  <option val="1">1pm</option>
                  <option val="2">2pm</option>
                  <option val="3">3pm</option>
                  <option val="4">4pm</option>
                  <option val="5">5pm</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button id="appointmentSubmit" variant="primary" type="submit">
            Submit
  </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//   render(<Example />);
// }

export default ModalComponent;