import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/PostCreateEditForm.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    about: "",
    image: "",
    country: "",
    city: "",
    tell_me: "",
    ask_me: ""
  });
  const { name, about, image, country, city, tell_me, ask_me } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, about, image, country, city, tell_me, ask_me } = data;
          setProfileData({ name, about, image, country, city, tell_me, ask_me });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("about", about);
    formData.append("country", country);
    formData.append("city", city);
    formData.append("tell me", tell_me);
    formData.append("aske me", ask_me);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control 
            placeholder="enter your city"
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            />
      </Form.Group>

      <Form.Group>
        <Form.Label>Country</Form.Label>
        <Form.Control 
            placeholder="choose your country"
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>About</Form.Label>
        <Form.Control
            placeholder="what do you want to say about yourself?"
          as="textarea"
          value={about}
          onChange={handleChange}
          name="about"
          rows={4}
        />
      </Form.Group>
      {errors?.about?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Tell me</Form.Label>
        <Form.Control 
            placeholder="what do you want kitties to tell you?"
            type="text"
            name="tell me"
            value={tell_me}
            onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Ask me</Form.Label>
        <Form.Control 
            placeholder="what do you want kitties to ask you?"
            type="text"
            name="ask me"
            value={ask_me}
            onChange={handleChange}
        />
      </Form.Group>
      
      
      

      
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change your profile pic
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            {/* <div className="d-md-none">{textFields}</div> */}
          </Container>
        </Col>
        {/* <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col> */}
      </Row>
      <Row>

      <Container className={ `mt-3 p-3 ${appStyles.Content}`}>
        <Row>
          <Col className="text-center pb-2"><h5>Edit your profile</h5></Col>
          
        </Row>
        {/* <Row>
          <Col classname="text-center"><h4></h4></Col>
        </Row> */}
        <Row className={`${styles.Row} `}>
          <Col>{textFields}</Col>
          </Row>
        
      </Container>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;