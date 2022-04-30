import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-black mb-2" variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h3>Wholesome Tech</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="inventory">
              Inventory
            </Nav.Link>
            <Nav.Link as={Link} to="blogs">
              Blogs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
