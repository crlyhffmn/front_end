import React, { useState } from "react";
import axios from "axios";
import './login.css';
import logo from './Logo3.png'
import { Link } from "react-router-dom";
import Register from "../Register";
import { Form, Button, Card, Row, Col, FormGroup } from 'react-bootstrap';

const LoginForm = () => {
    const [users, setUsers] = useState({
        username: '',
        password: ''
    });

    function onChangeHandler(e) {
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        });
    }

    function onSubmitHandler(e) {
        e.preventDefault();

    }

    console.log(logo);

    return (

        <div className='row'>
            <div className='column'>


                <h1>
                    MiniMint
                </h1>


                <br></br>

                <div>
                    <h2>
                        Some Mints a day<br></br>
                        Helps keep the bored away.
                    </h2>
                </div>

            </div>

            <div className="column">

                <form onSubmit={onSubmitHandler}>
                  
                    <img className='logo' src={logo} alt="mint"></img>
                    
                   
                    
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username" value={users.username} onChange={onChangeHandler} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={users.password} onChange={onChangeHandler} required />
                    </div>
                    <Button href="/" type="submit" className="btn-login" size="lg">Log In</Button>
                    <hr></hr>
                    <p>Not yet registered?</p>


                    <Button href="/register" type="submit" className="btn-register" size="lg" >Create Account</Button>


                </form>

            </div>
        </div>
    )



}
export default LoginForm;