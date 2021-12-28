import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Row, Col, FormGroup } from 'react-bootstrap';
import logo from './Logo3.png'
import './register.css';
import { hover } from '@testing-library/user-event/dist/hover';

const Register = () => {

    const initialState = {
        username: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })


    // states for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

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
        console.log("user.username = " + user.username + ", user.email = " + user.email + ", user.password = " + user.password)

        // check if any fields are empty
        if (user.username === "" || user.email === "" || user.password === "") {
            console.log("setError(true)")
            setSubmitted(false)
            setError(true)
        }
        // check email is in proper format before submitting
        else if (user.username !== "" && user.email !== "" && /* add bootstrap email validator here !validator.isEmail(user.email) && */ user.password !== "") {
            console.log("email validator")
            setSubmitted(false)
            setError(true)
        }
        // everything is good now submit to server
        else {
            console.log("setSubmitted(true) setError(false)")
            setSubmitted(true)
            setError(false)
        }
    }


    const displayMessage = () => {
        if (submitted) {   // show success message if true
            return (
                <div
                    className="success"
                    style={{
                        display: submitted ? "" : "none",
                    }}>
                    <h3 style={{
                        color: "black",
                        backgroundColor: "#7FFF00",
                    }}>You have successfully registered!</h3>
                </div>
            )
        }
        else if (error) {  // show error message if error is true
            return (
                <div
                    className="error"
                    style={{
                        display: error ? "" : "none",
                    }}>
                    <h5 style={{
                        color: "black",
                        backgroundColor: "red",
                    }}>Please enter all the fields</h5>
                </div>
            )
        }
    }


    const registerHandler = (e) => {
        e.preventDefault();
        if (error === false) {
            axios.post("http://localhost:10001/user", user)
                .then(response => {
                    console.log(response.data);
                    clearState()
                })
                .catch(error => {
                    console.error(error);
                })
        }
    };

    console.log(logo)

    return (
        <div className='row align-items-center'>
            <div className='col'>
                <div className="logob">
                    <img className='logo' src={logo} alt="mint" style={{ paddingTop: '50px' }}></img>
                    {/* <br></br> */}

                    <h1 style={{ float: 'center', paddingLeft: '85px', marginTop:'40px' }}>
                        MiniMint
                    </h1>

                    {/* <br></br> */}

                    <div className="textbox">

                        <h2 style={{ color: '#C21515', marginTop:'50px' }}>
                            Join the awesome Batch<br></br>

                            of Minty social media.
                        </h2>
                    </div>

                </div>


            </div>

            <div className='col'>

                <Form className='reg-form' onSubmit={registerHandler} >

                    <h3>Register</h3>
                    <h4>It's quick and easy</h4>
                    <hr></hr>
                    <Form.Group className="mb-3">
                        <Form.Label >Username </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="username"
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@mail.com"
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="password"
                            onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <div className="messages">
                        {displayMessage()}
                    </div>

                    <FormGroup >
                        <button
                            className="btn-reg"
                            onClick={checkFieldsHandler}
                            type="submit"
                        // style={{ width: '23rem', marginTop: '-12.125', marginRight: '160px', backgroundColor: '#C21515', border: 'none' }}
                        // onFocus={{ backgroundColor:'#BADABF' }}
                        >
                            Register
                        </button>
                    </FormGroup>
                </Form>
                <Form className='reg-formb'>
                    <a href="/login" class="stretched-link">Already Registered?</a>
                </Form>
                {/* </Card.Body>
                </Card> */}
            </div>

            {/* <div className='col'>

                

            </div> */}

        </div>
    )
}
export default Register;