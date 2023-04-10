import React from 'react'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import logo from '../assets/hissr-logo-2.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'

const NavBar = () => {

  const currentUser = useCurrentUser()
  const setCurrentUser = useSetCurrentUser()

  const { expanded, setExpanded, ref } = useClickOutsideToggle()

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <Dropdown className={styles.NavBarDropDown}>
      <Dropdown.Toggle variant="light" className={styles.NavBarDropDown}>
        Create
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <NavLink
            className={styles.NavLink}
            // activeClassName={styles.Active}
            to="/posts/create"
          >
            <i class="fa-solid fa-file-circle-plus"></i>post
          </NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink
            className={styles.NavLink}
            // activeClassName={styles.Active}
            to="/personals/create"
          >
            <i class="fa-solid fa-heart-circle-plus"></i>personal
          </NavLink>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  const loggedInIcons = (
    <>
      <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
        >
            <i className="fas fa-stream"></i>Feed
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked"
        >
            <i className="fas fa-paw"></i>Liked
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to="/"
            onClick={handleSignOut}
        >
            <i className="fas fa-sign-out-alt"></i>Sign out
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
        </NavLink>
    </>)
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i class="fa-solid fa-right-to-bracket"></i>Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i class="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    
      <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img className={styles.navbarLogo} src={logo} alt="logo" height="50" />
            </Navbar.Brand>
          </NavLink>
          {currentUser && addPostIcon}

        {/* <Navbar.Brand className={styles.navbarName}>hissr</Navbar.Brand> */}

        <Navbar.Toggle 
          ref={ref}
          onClick={() => setExpanded(!expanded)} 
          aria-controls="basic-navbar-nav" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink 
              exact 
              className={styles.NavLink} 
              activeClassName={styles.Active} 
              to="/"
            >
              <i class="fa-solid fa-house"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};

export default NavBar