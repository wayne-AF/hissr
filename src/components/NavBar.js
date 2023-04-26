import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../assets/hissr-logo-2.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { 
  useCurrentUser, 
  useSetCurrentUser 
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  // Handles user sign out
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  // Displays when the user is logged in
  const addPostIcon = (
    <NavDropdown 
        title={
          <span>
            <i className="fa-solid fa-square-plus"></i><strong>Create</strong>
          </span>
        }
        activeClassName={styles.Active}
      >
        <NavDropdown.Item className={styles.NavDropdown}>
          <NavLink
            to="/posts/create"
          >
              <i className="fa-solid fa-pen"></i>post
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item className={styles.NavDropdown}>
          <NavLink
            to="/personals/create"
          >
            <i className="fa-solid fa-bolt"></i>bolt
          </NavLink>
        </NavDropdown.Item>
        </NavDropdown>
  );

  // Links visible when user is logged in
  const loggedInIcons = (
    <>
      <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
        >
            <i className="fas fa-list"></i>Feed
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
            activeClassName={styles.Active}
            to="/personals"
        >
            <i className="fa-solid fa-bolt-lightning"></i>Bolts
        </NavLink>
        
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar 
              
              src={currentUser?.profile_image} text="Profile" height={40} />
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to="/"
            onClick={handleSignOut}
        >
            <i className="fas fa-sign-out-alt"></i>Sign out
        </NavLink>
    </>)

  // Links visible when user is logged out
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fa-solid fa-right-to-bracket"></i>Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
      <Navbar 
        expanded={expanded} 
        className={styles.NavBar} 
        expand="lg" 
        fixed="top"
      >
        <Container>
            <Navbar.Brand>
              <div className="d-flex align-items-center">
                <img 
                  className={styles.navbarLogo} 
                  src={logo} alt="logo" 
                  height="50" 
                />
                <span 
                  className={`ml-2 d-none d-sm-block ${styles.navbarName}`}
                >
                  hissr
                </span>
              </div>
            </Navbar.Brand>
          
          {currentUser && addPostIcon}

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
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar