import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavigationBar = (props) =>{
return(

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
      
  <Navbar.Brand href="#home">My ecommerce </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Food</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">More food</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Even more food</NavDropdown.Item>
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