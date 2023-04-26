import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "bootstrap";
import { useRedirect } from "../../hooks/useRedirect";
import { countries } from "../../components/Countries"; 
import { toast } from "react-toastify";

function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    city: "",
    country: "",
  })
  const { title, content, city, country } = postData;
  const history = useHistory();

  // Handles data submission
  // Refreshes user's access tokens before making submission request
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("title", title);
    formData.append("content", content);
    formData.append("city", city);
    formData.append("country", country);

    try {
        const {data} = await axiosReq.post("/posts/", formData);
        history.push(`/posts/${data.id}`);
        toast.success("Post created successfully");
    } catch(err){
        console.log(err)
        if (err.response?.status !== 401){
            setErrors(err.response?.data)
        }
    }
  };
  
  // Handles changes to input fields
  const handleChange = (event) => {
    setPostData({
        ...postData,
        [event.target.name]: event.target.value
    });
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
            placeholder="enter a title"
            required={true}
            type="text"
            name="title"
            value={title}
            aria-label="title"
            onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control 
            placeholder="enter your city"
            required={true}
            type="text"
            name="city"
            value={city}
            aria-label="city"
            onChange={handleChange}
        />
      </Form.Group>
      {errors?.city?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Country</Form.Label>
        <Form.Control
            as="select"
            name="country"
            required={true}
            className={appStyles.Input}
            value={country}
            aria-label="country"
            onChange={handleChange}
        >
          {/* Populates the list with the values from Countries.js */}
          <option>choose your country</option>
          {countries.map((country) => 
            <option key={country.code} value={country.name}>
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
            required={true}
            name="content"
            value={content}
            aria-label="content"
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
      <Button className={`${btnStyles.Button}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={`mt-3 p-3 ${appStyles.Content}`}>
        <Row>
          <Col 
            className={`${appStyles.Orange} text-center pb-2`}
          >
            <h3>Create a post</h3>
          </Col>
        </Row>
        <Row>
          <Col 
            className={`${appStyles.Orange} text-center pb-2`}
          >
            <h5>Start a conversation!</h5>
          </Col>  
        </Row>
        <hr />
        <Row className={`${styles.Row}`}>
          <Col>{textFields}</Col>
          </Row>
      </Container>
    </Form>
  );
}

export default PostCreateForm;
