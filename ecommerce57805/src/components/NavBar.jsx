import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda de botellas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Grandes</Nav.Link>
            <Nav.Link href="#features">Medianas</Nav.Link>
            <Nav.Link href="#pricing">Pequeñas</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
);
