import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Filter = ({products, filteredItems}) =>{

    const getValues =() =>{
      return {min: parseInt(document.querySelector('.min').value), max: parseInt(document.querySelector('.max').value), name:document.querySelector('.name').value}
      // return document.querySelector('.maxPrice').value
    }
    const results = () =>{
      if(getValues().name!==''){
        console.log(products.filter(e=>e.name.includes(getValues().name)))
          return filteredItems(products.filter(e=>e.name.includes(getValues().name)))
      }
      else{
      if(getValues().min==='' && getValues().max!==''){
        return products.filter(e=>(e.price<=getValues().max ))
      }
      else if(getValues().min!=='' && getValues().max===''){ 
        return products.filter(e=>(e.price>=getValues().min ))
      }else{
        return filteredItems(products.filter(e=>(e.price>=getValues().min && e.price<=getValues().max)))
      }}
      

    }
    return(<div>
      <div>
            <Dropdown autoClose={false}>
            <Dropdown.Toggle  variant="outline-light" id="dropdown-basic">
            FILTROS
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Form style={{padding:'15px'}}>
                <Form.Group className="mb-3">
                  <Row>
                  <Col>
                  <Form.Label >Precio minimo</Form.Label>
                  <Form.Control className="min"type="number"/>
                  </Col>
                  <Col>
                  <Form.Label >Precio maximo</Form.Label>
                  <Form.Control className="max" type="number"/>
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <Form.Label >Nombre</Form.Label>
                  <Form.Control className="name" type="input"/>
                  </Col>

                  </Row>
                </Form.Group>
                
                <Button variant="outline-dark" onClick={()=>{results()}}>Filtrar</Button>
                
            </Form>
            </Dropdown.Menu>
            </Dropdown> 
            
        </div>
      

    </div>
    )
  }
  export default Filter