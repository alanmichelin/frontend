import {React} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../App.css';


const Item = (props) =>{
   
    
    return(
        <div  >
        <Card style={{ width: '200px', marginTop:'25px', backgroundColor:'#6c757d', border:"2px solid #ced4da", color: "#ced4da"}}>
            <div className="imgdisplay">
            <Card.Img variant="top" src={props.img} className='imagen' />
            </div>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                <strong>${props.price}</strong>
                </Card.Text>

                
                <Row>
                <Col>
                <Button variant="outline-dark" style={{color:"#ced4da", borderColor:"#ced4da"}} onClick={()=>{props.agregar({name: props.name, price: props.price, img: props.img, qty: 1})}}>Buy</Button>
                </Col>
                <Col>
                {/* <Button variant="outline-dark"  onClick={()=>{props.details({name: props.name, price: props.price, img: props.img})}}>Detalles</Button> */}
                <Button variant="outline-dark" style={{color:"#ced4da", borderColor:"#ced4da"}} onClick={()=>{
                    var nameLink = props.name.split(' ').join('%')
                    console.log(nameLink)
                    props.details(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameLink}`)
                    }}>Details</Button>
                </Col>
                </Row>
                

                {/* <Button variant="outline-dark" id='asd' onClick={()=>{Cart({name: props.name, price: props.price, img: props.img})}}>Comprar</Button> */}

            </Card.Body>
        </Card>
        
        </div>
    )
} 
export default Item