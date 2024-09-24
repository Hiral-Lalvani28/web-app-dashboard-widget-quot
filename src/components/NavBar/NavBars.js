import React from 'react';
import { Navbar, Container, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faCog, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; 

const NavBars = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="justify-content-between p-0">
      <Form className="d-flex me-2 position-relative w-30">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <Form.Control
            type="search"
            placeholder="Search your page..."
            className="me-2 ps-5" // Padding start for space for icon
            aria-label="Search"
          />
        </Form>

        <div className="navbar-icons">
          <Button variant="button" className="icon-button">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge bg-warning p-1"><span class="visually-hidden">New alerts</span></span>
          </Button>
          <Button variant="button" className="icon-button">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="badge bg-success p-1"><span class="visually-hidden">New alerts</span></span>

          </Button>
          <Button variant="button" className="icon-button">
            <FontAwesomeIcon icon={faCog} />
          </Button>
          <Button variant="button" className="profile-button">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Profile" className="profile-image" />
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBars;