import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/hissr-logo-2.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    
      <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="50" />
        </Navbar.Brand>

        {/* <Navbar.Brand className={styles.navbarName}>hissr</Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <Nav.Link className={styles.linkText}>
              <i class="fa-solid fa-house"></i>Home
            </Nav.Link>
            <Nav.Link className={styles.linkText}>
              <i class="fa-solid fa-right-to-bracket"></i>Sign in
            </Nav.Link>
            <Nav.Link className={styles.linkText}>
              <i class="fa-solid fa-user-plus"></i>Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default NavBar