import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
 
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar'
 
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from '../About';


export default function navbar() {

  
    return (
        <div>
          
          <Router>
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


      <Nav>
        <NavDropdown
          id="nav-d"
          title="User Login"
          menuVariant="dark"
          align="right"
        >
          <NavDropdown.Item>
            <Router>
              
              <Button exact component="/About" path={About}><Route path="/" component={About}> Create an Account  </Route></Button>
              
            </Router>
          </NavDropdown.Item>
          <NavDropdown.Item><Button link to="/About">User Login</Button></NavDropdown.Item>
        </NavDropdown>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
</Router>
  
  </div>
    )
}
