import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'


 const ChangePassword = () => {
    
    const userId = useSelector(state => state.userId)

    console.log(userId)

    const initialState = {
        OldPassword: '',
        NewPassword: '',
        ConfirmPassword: ''
    };

    const [newUser, setNewUser] = useState({
        OldPassword: '',
        NewPassword: '',
        ConfirmPassword: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

   function onChangeHandler(event) {
        console.log(event.target.name);
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value,
        });
    };



    const clearState = () => {
        setNewUser({ ...initialState });
    };

    const checkFieldsHandler = (e) => {
    // check if any fields are empty
    if (newUser.OldPassword === "" || newUser.NewPassword === "" || newUser.ConfirmPassword === "") {
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
    if (submitted) {   // show success message if true
        return (
            <Alert
                variant='success'
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                Password Changed Successfully 
            </Alert>
        )
    } else if (error) {  // show error message if error is true
        return (
            <Alert
                variant='danger'
                style={{
                    display: error ? "" : "none",
                }}
            >
                Please fill in all fields
            </Alert>
        )
    } else if (errorMsg !== '') {
        return (
            <Alert
                variant='danger'
                style={{
                    display: error ? "" : "none",
                }}
            >
                {errorMsg}
            </Alert>
        )
    }
}

const registerHandler = (e) => {
    e.preventDefault();
    if (error === false) {
        axios.put(`http://localhost:10001/${newUser.NewPassword}`)//needs password as well 
            .then(response => {
                console.log(response.data);
                clearState();
            })
            .catch(error => {
                console.error(error);
                setErrorMsg(error);
            })
    }
};


    return(
        <Card>
        <Card.Title>Registration Form</Card.Title>
        <Card.Body style={{ textAlign: "left" }}>
            <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Pervious Password </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Old Password"
                        onChange={onChangeHandler}
                        name="OldPassword"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>New Password </Form.Label>
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