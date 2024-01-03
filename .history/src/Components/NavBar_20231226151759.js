import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logo from '../logo/logo.png';

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: lightgrey;
    text-decoration: none;
    &:hover {
      color: darkgrey;
    }
  }

  .navbar {
    background: linear-gradient(to left, #ffffff, #343a44);
    opacity: 95%;
  }

  .navbar-toggler-icon {
    background-color: black; // добавлено для изменения цвета бургер-меню
    border-radius: 15% 15% 15% 15%;
    paddingbottom: 15px;
  }
`;

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="navbar navbar-expand-lg navbar-dark fixed-top">
          <Container>
            <Navbar.Brand className="px-2 me-4">
              <Link to="/">
                <img src={logo} width={150} alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto h5 px-4">
                <Nav.Link>
                  <Link to="/technologia">Technologia</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/prodotti">Prodotti</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contatti">Contatti</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-dark" onClick={handleShow}>
                  Ordinare
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ordinare</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control type="email" placeholder="Enter E-mail" />
              <Form.Text className="text-muted">bla blsa b la</Form.Text>
            </Form.Group>
            <Form.Group controlId="formPlace">
              <Form.Label>Type Your Message:</Form.Label>
              <Form.Control type="email" placeholder="Enter E-mail" />
              <Form.Text className="text-muted">bla blsa b la</Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remeber" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
