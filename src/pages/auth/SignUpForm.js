import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: ''
    })
    const { username, password1, password2 } = signUpData

  return (
    <Container>
    <Row>
        <Col className="text-center"><h2>Welcome to hissr!</h2></Col>
        </Row>
    <Row>
        <Col className="text-center"><h4>Make friends with cats in your area and all over the world</h4></Col>
    </Row>
    <Row>
    <Col
        md={12}
        className={`my-auto d-none d-sm-block p-2 text-center ${appStyles.Outline}`}
      >
        <Image className={appStyles.FillerImage}
          
          src={"https://res.cloudinary.com/dnddcsxad/image/upload/v1681055196/cats-playing_qrwiur.jpg"}
        />
      </Col>
    </Row>
    <Row className={`${styles.Row} ${appStyles.Outline}`}>
      <Col className="mx-auto mt-5 py-2 p-md-2" md={10}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input} 
                type="text" 
                placeholder="username"  
                name="username"
                value={username}
                />
              
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">choose password</Form.Label>
              <Form.Control 
                className={styles.Input} 
                type="password" 
                placeholder="choose a password" 
                name="password1"
                value={password1}
                />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">confirm your password</Form.Label>
              <Form.Control 
                className={styles.Input} 
                type="password" 
                placeholder="confirm your password" 
                name="password2"
                value={password2}
                />
            </Form.Group>
            
            <Button 
                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} 
                type="submit">
              Sign up!
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      
    </Row>
    </Container>
  );
};

export default SignUpForm;
