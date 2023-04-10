import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: '',
    content: '',
    city: '',
    country: '',
    category:''
  })
  const { title, content, city, country, category } = postData

  const handleChange = (event) => {
    setPostData({
        ...postData,
        [event.target.name]: event.target.value
    })
  }

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
            placeholder="enter a title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>City <small>(optional)</small></Form.Label>
        <Form.Control 
            placeholder="enter your city"
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Country <small>(optional)</small></Form.Label>
        <Form.Control
            as="select"
            placeholder="Choose..."
            defaultValue="Choose..."
            name="country"
            value={country}
            onChange={handleChange}
        >
            <option>Choose...</option>
        </Form.Control>    
      </Form.Group>

      <Form.Group>
        <Form.Label>Category <small>(optional)</small></Form.Label>
        <Form.Check
            type="checkbox" 
            name="category"
            value={category}
            onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
            placeholder="what do you want to say?"
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={handleChange}
        />
      </Form.Group>

      <Button className={`${btnStyles.Button} `} onClick={() => {}}>
        cancel
      </Button>
      <Button className={`${btnStyles.Button} `} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
