import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignInForm() {
  const [signInData, setSignInData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = signInData

  const [errors, setErrors] = useState({})

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
        await axios.post('/dj-rest-auth/login/', signInData)
        history.push('/')
    } catch (err) {
        setErrors(err.response?.data)
    }
  }

  const handleChange = (event) => {
    setSignInData({
        ...signInData,
        [event.target.name]: event.target.value
    })
  }

  return (
    <Container>
        <Row>
        <Col className="text-center"><h2>Welcome back!</h2></Col>
        </Row>
    <Row>
        <Col className="text-center"><h4>We missed you</h4></Col>
    </Row>
      <Row>
        <Col
          md={12}
          className={`my-auto d-none d-sm-block p-2 text-center ${appStyles.Outline}`}
        >
          <Image
            className={appStyles.FillerImage}
            src={
              "https://res.cloudinary.com/dnddcsxad/image/upload/v1681062150/cats-licking_bi6pcz.jpg"
            }
          />
        </Col>
      </Row>
      <Row className={`${styles.Row} ${appStyles.Outline}`}>
        <Col className="mx-auto mt-5 py-2 p-md-2" md={10}>
          <Container className={`${appStyles.Content} p-4 `}>
            <h1 className={styles.Header}>sign in</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter username"
                  name="username"
                  className={styles.Input}
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}

              <Form.Group controlId="password">
                <Form.Label className="d-none">password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  name="password"
                  className={styles.Input}
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
              
              <Button 
                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} 
                type="submit">
              Sign in!
            </Button>
            </Form>
          </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signup">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInForm;