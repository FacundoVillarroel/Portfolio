import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarContainer = () => {

  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;
  }

  useEffect(() => {
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  },[])

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
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#skills">My Skills</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="progressWrapper">
          <div className="progressBar" id="bar"></div>
          <div className="progressBarUnder"></div>
        </div>
      </Navbar>
    </div>
  )
}

export default NavbarContainer
