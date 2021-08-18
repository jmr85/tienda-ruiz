import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (     
        <div>          
            <Navbar bg="light" expand="lg">
                <Container>
                    {/*
                        <Nav.Link href="https://github.com/jmr85/tienda-ruiz">
                            <i className="fab fa-github"></i>                       
                        </Nav.Link>
                     */}                     
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">                                         
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} activeClassName="active" to="/">
                                <CartWidget/>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/category/libros">
                                Libros
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/category/notebooks">
                                Notebooks
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;