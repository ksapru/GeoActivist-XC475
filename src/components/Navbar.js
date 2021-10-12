import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function navbar() {
    return (
        <div>
           <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home"> GeoActivist </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">

    <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Learn More"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1"> Events </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"> Types of Activism </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"> </NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Get Involved"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.4">Activists near me</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
            
        </div>
    )
}
