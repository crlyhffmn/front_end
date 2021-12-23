import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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

    // Could be used to display errors i.e. non-unique email or username, etc.
    const [errorCredential, setCredentialError] = useState({
        credentialError: ''
    })


    // states for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    function onSubmitHandler(event) {
        event.preventDefault();
        // Axios call(s) && Form validation
    }

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
          if(user.username === "" || user.email === "" || user.password === "") {
              console.log("setError(true)")
              setSubmitted(false)
              setError(true)
          }
          // check email is in proper format before submitting
          else if(user.username !== "" && user.email !== "" && /* add bootstrap email validator here !validator.isEmail(user.email) && */ user.password !== "") { 
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
        if (submitted){   // show success message if true
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
        else if (error){  // show error message if error is true
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

    return (
        <Form onSubmit={registerHandler}>
            <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                    {/* {user.name} , {user.email} , {user.password} , {user.entry} */}
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-5 col-xl-5">
                                <div className="card bg-primary text-white">
                                    <div className="card-body p-5 text-center">

                                        <div className="mb-md-5 mt-md-4 pb-5">

                                            <h2 className="fw-bold mb-2 text">Registration Form</h2>
                                            <p className="text-white-50 mb-5">Please fillout the form the continue</p>

                                            <div className="form-outline form-white mb-4">
                                                <input type="text" id="name" className="form-control form-control-lg" name="username" value = {user.username} onChange={onChangeHandler} />
                                                <label className="form-label" htmlFor="username" >Username</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="email" id="email" className="form-control form-control-lg" name="email" value = {user.email} onChange={onChangeHandler}/>
                                                <label className="form-label" htmlFor="email" >Email</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="password" id="password" className="form-control form-control-lg" name="password" value = {user.password} onChange={onChangeHandler}/>
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                            <br />
                                            {/* <div>
                                                <button className="btn btn-outline-primary btn-lg px-10" onClick={checkFieldsHandler} type="submit" value = "register">Register</button>
                                            </div> */}
                                            <br />
                                            <div className="messages">
                                                {displayMessage()}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Button  onClick={checkFieldsHandler} type="submit">Register</Button>
        </Form>
    )
}
export default Register;