import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { toast } from "react-toastify";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // Handles changes made to username field
  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  // Handles submission of input data
  // Displays confirmation message using react-toastify
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      toast.success("Username updated successfully");
      history.push("/");
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
      toast.error("Something went wrong! Try again later.");
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
        <Row>
          <Col 
            className={`${appStyles.Orange} text-center pt-2`}
          >
            <h3>Change your username</h3>
          </Col>
        </Row>
        <hr />
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                aria-label="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={btnStyles.Button}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            <Button
              className={btnStyles.Button}
              type="submit"
            >
              update username
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;