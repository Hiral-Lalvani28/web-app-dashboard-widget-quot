import React from 'react';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faCog, faUser, faSearch  } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

const NavBars = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">My Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>

        <Form className="d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>

        <div className="navbar-icons">
          <Button variant="link">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge">3</span>
          </Button>
          <Button variant="link">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="badge">5</span>
          </Button>
          <Button variant="link">
            <FontAwesomeIcon icon={faCog} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon icon={faUser} />
          </Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBars;
