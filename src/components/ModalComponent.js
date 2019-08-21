import React from 'react';
import { useState } from 'react'
import {Modal, Button} from 'react-bootstrap';

// function ModalComponent(props) {
//     return (
//         <Modal.Dialog>
//   <Modal.Header closeButton>
//     <Modal.Title>Modal title</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <p>Modal body text goes here.</p>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary">Close</Button>
//     <Button variant="primary">Save changes</Button>
//   </Modal.Footer>
// </Modal.Dialog>
//     )
function ModalComponent() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
//   render(<Example />);
// }
   
export default ModalComponent;