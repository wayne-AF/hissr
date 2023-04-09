import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/hissr-logo-2.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    
      <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img className={styles.navbarLogo} src={logo} alt="logo" height="50" />
            </Navbar.Brand>
          </NavLink>
        

        {/* <Navbar.Brand className={styles.navbarName}>hissr</Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i class="fa-solid fa-house"></i>Home
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
              <i class="fa-solid fa-right-to-bracket"></i>Sign in
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
              <i class="fa-solid fa-user-plus"></i>Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default NavBar