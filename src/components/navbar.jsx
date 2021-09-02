import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Ort from './img/ort.png'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const NavigationBar = (props) =>{
return(
<Router>

 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      
  <Navbar.Brand href="#home">< Link to='/'> <img src={Ort} alt="Ort" style={{width:'50%', left:'0px'}}/> </Link>  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">


    </Nav>
    <Nav>

      <Nav.Link>
        {props.cart}
      {/* <Cart/> */}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</Router>
)
}
export default NavigationBar