import React, { useState } from "react";
import axios from "axios";

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

    }

    return(
        <div className="LoginContainer">
            <div className="wrapper">
                <h1>Log In</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Username" value={users.username} onChange={onChangeHandler} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={users.password} onChange={onChangeHandler} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    <p>Forgot your password?</p>
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
                
            </div>
        </div>
    )

}
export default LoginForm;