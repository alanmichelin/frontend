import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Recipe from './recipe';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ItemDescription = ({info, description}) => {
 
    return (
      <>
  
        <Modal show={true} onHide={info} >
          <Modal.Header closeButton>
            
            <Modal.Title>{description.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Row>
            <Col>
            <img src={description.img} style={{maxWidth:'300px', maxHeight:'300px'}} alt="" srcset="" />
            </Col>
            <Col xs={3}>
            <Recipe ingredients={description.recipe}/>
            </Col>
            </Row>
            
            <h2 style={{textAlign:"left"}}>Recipe:</h2>
            <p style={{textAlign:"left"}}>{description.desc}</p>
            
            
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