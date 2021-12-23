import React, { useState } from "react";
import axios from "axios";
import {Alert} from 'react-bootstrap';
import './LoginForm.css';


const LoginForm = () => {
    const [users, setUsers] = useState({
        username: '',
        password: ''
    });

    function onChangeHandler(e){
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        });
    };

    function onSubmitHandler(e) {
        e.preventDefault();
        axios.get("http://localhost:10001/user", users.username)
        .then(response => {
            console.log(response.data);
            if(response.data === ""){
                return(
                    <Alert>Please enter your username</Alert>
                )
            }else if(response.data.password !== users.password){
                return(
                    <Alert>Invalid Password</Alert>
                )
            };
        })
        .catch(error => {console.error(error)})
    }

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
                <form className="form">
                    <div className="form-group">
                        <input type="text" placeholder="Enter Your Email or Username" name="username" value={users.username} onChange={onChangeHandler} /> <br></br>
                         <input type="password"  placeholder="Password" name="password" value={users.password} onChange={onChangeHandler} /><br/><br/>
                        <button onSubmit={onSubmitHandler}>Log In</button>
                    </div>
                        {/* <Link to="/update">forgot you password?</Link> */}
                    <p><a href ="/">forgot your password?</a></p>
                    <hr/>
                    <div className="btn">
                        <button onClick={onClickHandler}>Create an Account</button>
                    </div>
                </form>                
            </div>
        </div>
    )

}
export default LoginForm;