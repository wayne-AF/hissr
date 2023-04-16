import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { countries } from "../../components/Countries";

function PersonalCreateForm() {

  const [errors, setErrors] = useState({});

  const [personalData, setPersonalData] = useState({
    title: '',
    content: '',
    city: '',
    country: ''
  })

  const { title, content, city, country } = personalData


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
            placeholder="enter a title"
            type="text"
            name="title"
            value={title}
            onChange={() => {}}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>City <small>(optional)</small></Form.Label>
        <Form.Control 
            placeholder="enter your city"
            type="text"
            name="city"
            value={city}
            onChange={() => {}}
        />
      </Form.Group>
      {errors?.city?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Country <small>(optional)</small></Form.Label>
        <Form.Control
            as="select"
            name="country"
            className={appStyles.Input}
            value={country}
            onChange={() => {}}
        >
          <option>choose your country</option>
          {countries.map((country) => <option value={country.name}>
                {country.name}
              </option>
              )}
        </Form.Control>    
      </Form.Group>
      {errors?.country?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      
      
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
            placeholder="what do you want to say?"
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={() => {}}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        upload
      </Button>
    </div>
  );

  return (
    <Form>
      {/* <Container>
        <Row>
        <Col xs={12} md={8} lg={6} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        </Row>
      </Container> */}
      <Container className={ `mt-3 p-3 ${appStyles.Content}`}>
        <Row>
          <Col className="text-center pb-2"><h3>Create a personal</h3></Col>
          
        </Row>
        {/* <Row>
          <Col classname="text-center"><h4></h4></Col>
        </Row> */}
        <Row className={`${styles.Row} `}>
          <Col>{textFields}</Col>
          </Row>
        
      </Container>
        
        
      
    </Form>
  );
}

export default PersonalCreateForm;