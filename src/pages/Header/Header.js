import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      className="bg-black mb-2 d-flex justify-content-between"
      variant="dark"
      bg="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h3>Wholesome Tech</h3>
        </Navbar.Brand>
        <div className="p-2">
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="items">
                Items
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>

              {user && (
                <>
                  <Nav.Link as={Link} to="manageInventory">
                    Manage Inventory
                  </Nav.Link>
                  <Nav.Link as={Link} to="addItems">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="myItems">
                    My Items
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
