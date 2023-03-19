import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigation.css";
function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="">  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navi1">
            <Nav className="navi">
              <Nav.Link className="position " href="/">
                Home
              </Nav.Link>
              <Nav.Link className="position " href="SearchDegree">
                Verify Degree
              </Nav.Link>
              <Nav.Link className="position " href="Login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
