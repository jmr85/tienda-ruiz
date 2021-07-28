import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (     
        <div>
            <Navbar bg="light" expand="lg">
             <Container>
                <Navbar.Brand href="#home">JMRuiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#link">FAQs</Nav.Link>
                    <Nav.Link href="#home">Ofertas</Nav.Link>              
                    <NavDropdown title="Comprar" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Producto</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Servicio</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Vehiculo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Inmueble</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavBar;