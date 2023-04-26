import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
  useRedirect("loggedIn")
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: ","
    });
    const { username, password1, password2 } = signUpData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    // Handles changes to input fields
    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        });
    };

    // Handles data submitted in the form
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch(err){
            setErrors(err.response?.data);
        }
    };

  return (
    <Container>
    <Row className={`${styles.Row}`}>
      <Col className="mx-auto mt-5 py-2 p-md-2" md={10}>
        <Container className={`${appStyles.Content} p-4 `}>
        <Row>
        <Col className={`${appStyles.Orange} text-center`}>
          <h2>Welcome to hissr!</h2>
        </Col>
        </Row>
    <Row>
        <Col className={`${appStyles.Orange} text-center`}>
          <h4>Chat to cats all over the world</h4>
        </Col>
    </Row>
    <hr />
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input} 
                type="text" 
                placeholder="username"  
                name="username"
                value={username}
                aria-label="username"
                onChange={handleChange}
                />
            </Form.Group>
            {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>{message}</Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">choose password</Form.Label>
              <Form.Control 
                className={styles.Input} 
                type="password" 
                placeholder="choose a password" 
                name="password1"
                value={password1}
                aria-label="password"
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx} >{message}</Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">
                confirm your password
              </Form.Label>
              <Form.Control 
                className={styles.Input} 
                type="password" 
                placeholder="confirm your password" 
                name="password2"
                value={password2}
                aria-label="confirm password"
                onChange={handleChange}
                />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx} >{message}</Alert>
            ))}
            
            <Button 
                className={`${btnStyles.Button} ${btnStyles.Wide}`} 
                type="submit">
              Sign up!
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in!</span>
          </Link>
        </Container>
      </Col>
      
    </Row>
    </Container>
  );
};

export default SignUpForm;
