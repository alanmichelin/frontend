
import NavigationBar from './components/navbar.jsx';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";
import Restaurante from './components/img/restaurant.jpg'


const Inicio = () =>{
return (<Container className='container'>

        <h1>RestORTrante</h1>
        <Row>
        <Col xs={12}><NavigationBar/></Col>
        <p>< Link to='/store'> Ir a la tienda</Link></p>
        <Col className="justify-content-md-center text" >
          <br/>
          <h1 style={{color:'white'}}>Bienvenido a RestORTRante!</h1>
        <h2 style={{color:'white'}}>Visita nuestra tienda haciendo < Link to='/store'> click aqui</Link> </h2>
        <img src={Restaurante} alt="" srcset="" />
        </Col>
  
        
        </Row>

  

  
        <Row>
        
        </Row>
        
      </Container>)}

export default Inicio