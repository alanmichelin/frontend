import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
const ItemDescription = ({info, description}) => {
  console.log(description)
    // const [show, setShow] = useState(true);
    // setShow(props.details)
    // const handleClose = () => props.switch;

  
    return (
      <>
        
  
        <Modal show={true} onHide={info} >
          <Modal.Header closeButton>
            <Modal.Title>{description.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <img src={description.img} style={{maxWidth:'300px', maxHeight:'300px'}} alt="" srcset="" />
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={info}>
              Close
            </Button>
            <Button variant="primary" onClick={info}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ItemDescription