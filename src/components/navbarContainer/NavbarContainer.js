import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarContainer = () => {
  return (
    <div className='navbarContainer'>
      <Navbar bg='dark' expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Facundo Villarroel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className='navbarFlex'>
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#tecnologies">Tecnologies</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="progressWrapper">
          <div className="progressBarUnder"></div>
        </div>
      </Navbar>
    </div>
  )
}

export default NavbarContainer
