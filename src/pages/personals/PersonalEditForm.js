import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert } from "bootstrap";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { toast } from "react-toastify";

function PersonalEditForm() {
  const [errors, setErrors] = useState({});

  const [personalData, setPersonalData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const { title, content, category } = personalData;

  const history = useHistory();
  const { id } = useParams();

  // Handles API request using personal ID
  // Gets the existing content of the personal
  // Prevents other users from editing the personal
  useEffect(() => {
    const handleMount = async () => {
      try {
        const {data} = await axiosReq.get(`/personals/${id}/`);
        const {title, content, category, is_owner} = data;

        is_owner ? setPersonalData({title, content, category}) 
        : history.push("/");
      } catch(err){
          // console.log(err)
      }
    }
    handleMount();
  }, [history, id]);
  
  // Handles data submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);

    try  {
        await axiosReq.put(`/personals/${id}`, formData);
        history.push(`/personals/${id}`);
        toast.success("Bolt updated successfully");
    } catch(err){
        console.log(err)
        if (err.response?.status !== 401){
            setErrors(err.response?.data);
        }
    }
  };

  // Handles changes to input fields
  const handleChange = (event) => {
    setPersonalData({
        ...personalData,
        [event.target.name]: event.target.value
    })
  };

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
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          required={true}
          className={appStyles.Input}
          value={category}
          aria-label="category"
          onChange={handleChange}
        >
          <option>select a topic</option>
          <option value="thoughtoftheday">thought of the day</option>
          <option value="grooming">grooming</option>
          <option value="birdwatching">bird watching</option>
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
        className={`${btnStyles.Button}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        save
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
            <h3>Edit your bolt</h3>
          </Col>
        </Row>
        <Row>
          <Col 
            className={`${appStyles.Orange} text-center pb-2`}
          >
            <h5>Change your mind?</h5>
          </Col>  
        </Row>
        <hr />
        <Row className={`${styles.Row} `}>
          <Col>{textFields}</Col>
          </Row>
      </Container>
    </Form>
  );
}

export default PersonalEditForm;