import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './Logo3.png'
import './register.css';
import { hover } from '@testing-library/user-event/dist/hover';
import { Form, Button, Card, Row, Col, Alert, FormGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const Register = () => {

    const [validated, setValidated] = useState(false);

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

    const dispatch = useDispatch();


    // states for checking the errors
    const [submitted, setSubmitted] = useState(false);
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
        //console.log("user.username = " + user.username + ", user.userEmail = " + user.userEmail + ", user.userPassword = " + user.userPassword)

        // check if any fields are empty
        if (user.username === "" || user.userEmail === "" || user.userPassword === "") {
            console.log("setError(true)")
            setSubmitted(false)
            setErrorMsg('Please fill out all the fields.')
        }        
        else { // everything is good now submit to server
            console.log("setSubmitted(true) setError(false)")
            setErrorMsg('')
        }
    }


    const displayMessage = () => {
        if (errorMsg !== '') {
            return (
                <Alert
                    variant='danger'
                    style={{
                        display: errorMsg ? "" : "none",
                    }}
                >
                    {errorMsg}
                </Alert>
            )
        }
        else if (submitted) {   // show success message if true
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
        }
    }


    const registerHandler = (e) => {
        e.preventDefault();
        dispatch(login(user));
        const form = e.currentTarget;
        if (form.checkValidity() === true) {
            e.preventDefault();
            e.stopPropagation();
            axios.post("http://localhost:10001/user", user)
                .then(response => {
                    console.log(response.data);
                    clearState();
                    setSubmitted(true)
                })
                .catch(error => {
                    console.error(error);
                    //setErrorMsg(error.response.data.message);
                    setErrorMsg("User email has already been registered.")
                    console.log("error.response.data.message = " + error.response.data.message)
                })
        }
        else {
            setSubmitted(false)
        }

        setValidated(true);

    }; 

    console.log("errorMsg = " + errorMsg);

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

                <Form className='reg-form' noValidate validated={validated} onSubmit={registerHandler} >

                    <h3>Register</h3>
                    <h4>It's quick and easy</h4>
                    <hr></hr>
                    <Form.Group className="mb-3">
                        <Form.Label >Username </Form.Label>
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