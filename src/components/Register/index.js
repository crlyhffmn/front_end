import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../../userSlice";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const initialState = {
    username: "",
    userEmail: "",
    userPassword: "",
  };

  const [user, setUser] = useState(initialState);

  const dispatch = useDispatch();

  // states for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function onChangeHandler(event) {
    console.log(event.target.name);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  const clearState = () => {
    setUser({ ...initialState });
  };

  // Handle form subsmission
  const checkFieldsHandler = (e) => {
    //console.log("user.username = " + user.username + ", user.userEmail = " + user.userEmail + ", user.userPassword = " + user.userPassword)

    // check if any fields are empty
    if (
      user.username === "" ||
      user.userEmail === "" ||
      user.userPassword === ""
    ) {
      console.log("setError(true)");
      setSubmitted(false);
      setErrorMsg("Please fill out all the fields.");
    } else {
      // everything is good now submit to server
      console.log("setSubmitted(true) setError(false)");
      setErrorMsg("");
    }
  };

  const displayMessage = () => {
    if (errorMsg !== "") {
      return (
        <Alert
          variant="danger"
          style={{
            display: errorMsg ? "" : "none",
          }}
        >
          {errorMsg}
        </Alert>
      );
    } else if (submitted) {
      // show success message if true
      return (
        <Alert
          variant="success"
          style={{
            display: submitted ? "" : "none",
          }}
        >
          You have successfully registered!
        </Alert>
      );
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      axios
        .post("http://localhost:10001/user", user)
        .then((response) => {
          console.log(response.data);
          clearState();
          setSubmitted(true);
          dispatch(loginUser(response.data));
        })
        .catch((error) => {
          console.error(error);
          //setErrorMsg(error.response.data.message);
          setErrorMsg("Username or email has already been registered.");
          console.log(error.response);
        });
    } else {
      setSubmitted(false);
    }

    setValidated(true);
  };

  console.log("errorMsg = " + errorMsg);

  return (
    <Card>
      <Card.Title>Registration Form</Card.Title>
      <Card.Body style={{ textAlign: "left" }}>
        <Form noValidate validated={validated} onSubmit={registerHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Username </Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              onChange={onChangeHandler}
              name="username"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a username.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="example@mail.com"
              onChange={onChangeHandler}
              name="userEmail"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password </Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={onChangeHandler}
              name="userPassword"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="messages">{displayMessage()}</div>
          <Button onClick={checkFieldsHandler} type="submit">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default Register;
