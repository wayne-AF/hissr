import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "bootstrap";
import { countries } from "../../components/Countries";
import { toast } from "react-toastify";

function PostEditForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    city: "",
    country: "",
  })
  const { title, content, city, country } = postData

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    const handleMount = async () => {
        try {
            const {data} = await axiosReq.get(`/posts/${id}/`)
            const {title, content, city, country, is_owner} = data

            is_owner ? setPostData({title, content, city, country}) : history.push("/")
        } catch (err) {
            console.log(err)

        }
    }
    handleMount()
  }, [history, id])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append("title", title)
    formData.append("content", content)
    formData.append("city", city)
    formData.append("country", country)

    try {
        await axiosReq.put(`/posts/${id}/`, formData)
        history.push(`/posts/${id}`)
        toast.success("Post updated successfully")
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
        <Form.Label>City</Form.Label>
        <Form.Control 
            placeholder="enter your city"
            required={true}
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
        <Form.Label>Country</Form.Label>
        <Form.Control
            as="select"
            name="country"
            required={true}
            className={appStyles.Input}
            value={country}
            onChange={handleChange}
        >
          {countries.map((countrySelect) => <option value={countrySelect.code}>
                {countrySelect.name}
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
            required={true}
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
      <Button className={`${btnStyles.Button} `} type="submit">
        save changes
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={ `mt-3 p-3 ${appStyles.Content}`}>
        <Row>
          <Col className={`${appStyles.Orange} text-center pb-2`}><h3>Edit your post?</h3></Col>
        </Row>
        <Row>
          <Col className={`${appStyles.Orange} text-center pb-2`}><h5>Remember that your edits might affect the conversation!</h5></Col>
        </Row>
        <Row className={`${styles.Row} `}>
          <Col>{textFields}</Col>
          </Row>
      </Container>
    </Form>
  );
}

export default PostEditForm;
