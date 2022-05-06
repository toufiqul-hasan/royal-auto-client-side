import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="d-inline-block align-top"
              width={30}
              height={30}
              src={logo}
              alt="Royal Auto Logo"
            />
            <span className="logo">Royal Auto</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav className="nav">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              {user ? (
                <Nav.Link as={Link} to="login" onClick={handleSignOut}>
                  Log Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
              {user ? (
                <Nav.Link as={Link} to="inventory">
                  Inventory
                </Nav.Link>
              ) : (
                <Nav.Link />
              )}
              {user ? (
                <Nav.Link as={Link} to="myitem">
                  My Item
                </Nav.Link>
              ) : (
                <Nav.Link />
              )}
              {user ? (
                <Nav.Link as={Link} to="additem">
                  Add Item
                </Nav.Link>
              ) : (
                <Nav.Link />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;