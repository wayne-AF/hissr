import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CountrySelect from 'react-bootstrap-country-select'
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "bootstrap";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: '',
    content: '',
    city: '',
    country: '',
    category: '',
  })
  const { title, content, city, country, category } = postData

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('title', title)
    formData.append('content', content)
    formData.append('city', city)
    formData.append('country', country)
    formData.append('category', category)

    try {
        const {data} = await axiosReq.post('/posts/', formData)
        history.push(`/posts/${data.id}`)
    } catch(err){
        console.log(err)
        if (err.response?.status !== 401){
            setErrors(err.response?.data)
        }
    }
  }


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
            onChange={handleChange}
        />
      </Form.Group>
      {errors?.city?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Country <small>(optional)</small></Form.Label>
        {/* <Form.Control
            type="text"
            // as="select"
            placeholder="enter your city"
            
            name="country"
            value={country}
            onChange={handleChange}
        >
            
        </Form.Control>     */}
        
        <CountrySelect
          as="select"
          name="country"
          
          value={country}
          flags={false}
          onChange={handleChange}
        />    
      </Form.Group>
      {errors?.country?.map((message, idx) => (
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
          <option value="hangout">hang out</option>
          <option value="groupchat">group chat</option>
          <option value="groomingparty">grooming party</option>
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
            placeholder="what do you want to say?"
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
        className={`${btnStyles.Button} `} 
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} `} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row>
        <Col xs={12} md={8} lg={6} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        </Row>
      </Container>
        
        
      
    </Form>
  );
}

export default PostCreateForm;
