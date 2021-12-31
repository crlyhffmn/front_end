import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "../../userSlice";

 const ChangePassword = () => {
    
    const user = useSelector(state => state.user)
    
   const [userObject, setUserObject] = useState(user)

   const dispatch = useDispatch();

   const initialState ={
    OldPassword: '',
    NewPassword: '',
    ConfirmPassword: ''
};

    const [updateInfo, setUpdateInfo] = useState(initialState);

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

   function onChangeHandler(event) {
        console.log(event.target.name);
        setUpdateInfo({
            ...updateInfo,
            [event.target.name]: event.target.value,
        });
    };



    const clearState = () => {
        setUpdateInfo({ ...initialState });
    };

    const checkFieldsHandler = (e) => {
    // check if any fields are empty
    if (updateInfo.OldPassword === "" || updateInfo.NewPassword === "" || updateInfo.ConfirmPassword === "") {
        console.log("setError(true)")
        setSubmitted(false)
        setError(true)
    }
     else { // everything is good now submit to server
        console.log("setSubmitted(true) setError(false)")
        setSubmitted(true)
        setError(false)
    }
}

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
          Password Changed Successfully
        </Alert>
      );
    }
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    setUserObject({
        ...userObject,
        userPassword:updateInfo.OldPassword,
    });
    axios
      .post("http://localhost:10001/user/login", userObject)
      .then((response) => {
        console.log(response.data);
        setUserObject({
            ...userObject,
            userPassword:updateInfo.NewPassword,
        });
        axios
        .put("http://localhost:10001/user", userObject)
        .then((response) => {
          console.log(response.data);
        dispatch(loginUser(response.data));
        });
        
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response);
        //does not alert user
        setErrorMsg("Username or Password is Incorrect");
        setUserObject(initialState);
      });
  }

    return(
        <Card>
        <Card.Title>Registration Form</Card.Title>
        <Card.Body style={{ textAlign: "left" }}>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Pervious Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Old Password"
                        onChange={onChangeHandler}
                        name="OldPassword"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="New Password"
                        onChange={onChangeHandler}
                        name="NewPassword"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        onChange={onChangeHandler}
                        name="ConfirmPassword"
                    />
                </Form.Group>
                <div className="messages">
                    {displayMessage()}
                </div>
                <Button
                    onClick={checkFieldsHandler}
                    type="submit"
                >
                    Change Password
                </Button>
            </Form>
        </Card.Body>
        </Card>
        )   
}
export default ChangePassword;