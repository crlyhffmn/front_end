import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';

const Register = () => {

    const initialState = {
        username: '',
        userEmail: '',
        userPassword: ''
    }

    const [user, setUser] = useState({
        username: '',
        userEmail: '',
        userPassword: ''
    })


    // states for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

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
        console.log("user.username = " + user.username + ", user.email = " + user.userEmail + ", user.password = " + user.password)

        // check if any fields are empty
        if (user.username === "" || user.userEmail === "" || user.password === "") {
            console.log("setError(true)")
            setSubmitted(false)
            setError(true)
        } else { // everything is good now submit to server
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
                    You have successfully registered!
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
            axios.post("http://localhost:10001/user", user)
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

    return (
        <Card>
            <Card.Title>Registration Form</Card.Title>
            <Card.Body style={{ textAlign: "left" }}>
                <Form onSubmit={registerHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="username"
                            onChange={onChangeHandler}
                            name="username"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@mail.com"
                            onChange={onChangeHandler}
                            name="userEmail"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="password"
                            onChange={onChangeHandler}
                            name="userPassword"
                        />
                    </Form.Group>
                    <div className="messages">
                        {displayMessage()}
                    </div>
                    <Button
                        onClick={checkFieldsHandler}
                        type="submit"
                    >
                        Register
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Register;