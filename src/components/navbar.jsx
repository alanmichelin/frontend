import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavigationBar = (props) =>{
return(

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      
  <Navbar.Brand href="#home">Jester vape </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Quienes somos</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Liquidos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Equipos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Atos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
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
)
}
export default NavigationBar