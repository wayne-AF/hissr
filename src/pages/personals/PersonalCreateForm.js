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
import { Alert } from "bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function PersonalCreateForm() {

  const [errors, setErrors] = useState({});

  const [personalData, setPersonalData] = useState({
    title: '',
    content: '',
    category: ''
  })

  const { title, content, category } = personalData

  const history = useHistory()
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('title', title)
    formData.append('content', content)
    formData.append('category', category)

    try  {
        const {data} = await axiosReq.post('/personals/', formData)
        history.push(`/personals/${data.id}`)
    } catch(err){
        console.log(err)
        if (err.response?.status !== 401){
            setErrors(err.response?.data)
        }
    }
  }

  const handleChange = (event) => {
    setPersonalData({
        ...personalData,
        [event.target.name]: event.target.value
    })
  }

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
            className={appStyles.Input}
            placeholder="enter a title"
            required={true}
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Category <small>(optional)</small></Form.Label>
        <Form.Control
          as="select"
          name="category"
          className={appStyles.Input}
          value={category}
          onChange={handleChange}
        >
          <option>select a topic</option>
          <option value="thoughtoftheday">thought of the day</option>
          <option value="grooming">grooming</option>
          <option value="birdwatching">bird watching</option>
          <option value="newfriends">new friends</option>
          <option value="dogbullying">dog bullying</option>
          <option value="stupidhumans">stupid humans</option>
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
            className={appStyles.Input}
            placeholder="what do you want to say?"
            required={true}
            as="textarea"
            rows={6}
            name="content"
            value={content}
            onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        upload
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
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
        <hr />
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