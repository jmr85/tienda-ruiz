import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './Logo'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

const NavBar = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <Navbar bg="light" expand="lg" style={{ padding: 0 }}>
        <Container>
          <Navbar.Brand as={NavLink} activeClassName="active" to="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/libros"
              >
                Libros
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/notebooks"
              >
                Notebooks
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/sillas-oficina"
              >
                Sillas de oficina
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/accesorios"
              >
                Accesorios
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/category/bazar-nerd"
              >
                Bazar Nerd
              </Nav.Link>
              <Nav.Link
                href="https://github.com/jmr85/tienda-ruiz"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </div>
  )
}

export default NavBar
