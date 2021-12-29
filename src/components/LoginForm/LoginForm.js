import React, { useState } from "react";
import axios from "axios";
import {Alert} from 'react-bootstrap';
import './LoginForm.css';
import logo from '../../image/Logo3.png';
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";

const LoginForm = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    function onChangeHandler(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    function onSubmitHandler(e) {
        e.preventDefault();
        axios.get("http://localhost:10001/user", user)
        .then(response => {
            console.log(response.data);
            dispatch(login(user))
        })
        .catch(error => {
            console.error(error)
            return(
                <Alert>error.response.data.message</Alert>
            )
        })
    };

    function onClickHandler(e){
        e.preventDefault();
        window.location.href='/Register';
    }

    return(
        <div className="container">
            <div className="containerLeft">
                <div className="text-left">
                    <h1>MiniMint</h1>
                    <h2>Some Mints a day<br/>
                        Helps keep the bored away.</h2>
                </div>
            </div>

            <div className="containerRight">
                <form className="form" onSubmit={onSubmitHandler}>
                    <img className="logo" src={logo}/>
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" placeholder="Enter Your Username" name="username" value={user.username} onChange={onChangeHandler} required/> <br></br>
                    </div><br/>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password"  placeholder="Password" name="password" value={user.password} onChange={onChangeHandler} required /><br/><br/>
                        <button className="btn-login" onSubmit={onSubmitHandler}>Log In</button>
                    </div>
                    <hr/>
                    <button className="btn-register" onClick={onClickHandler}>Create an Account</button>
                </form>                
            </div>
        </div>
    )

}
export default LoginForm;