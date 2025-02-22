import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

//Navbar component
const Navigbar = () => {
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor:'white'}}>
      <Container>
        <Navbar.Brand href="#home">PlayStation® VR2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Games</Nav.Link>
            <Nav.Link href="#link">Tech Specs</Nav.Link>
            <NavDropdown title="Store" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Buy consoles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Buy accessories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Buy games</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Subscribe to PS Plus
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigbar
