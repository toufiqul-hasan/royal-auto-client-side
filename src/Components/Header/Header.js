import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../Assets/Images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" sticky="top"  bg="light" variant="light">
    <Container>
    <Navbar.Brand as={Link} to="/"><img className="d-inline-block align-top" width={30} height={30} src={logo} alt="Royal Auto Logo" /><span className='logo'>Royal Auto</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" />
    <Nav className="nav">
    <Nav.Link as={Link} to="home">Home</Nav.Link>
    <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
    <Nav.Link as={Link} to="about">About</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
};

export default Header;