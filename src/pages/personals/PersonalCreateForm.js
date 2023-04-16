import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function PersonalCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className="text-center">
      {/* Add your form fields here */}

    
    
      <Button
        className={`${btnStyles.Button}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        create
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