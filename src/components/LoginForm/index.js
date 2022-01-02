import React, { useState } from "react";
import axios from "axios";
import { Button, Alert } from 'react-bootstrap';
// import "./index.css";
import './login.css';

import logo from "../../image/Logo3.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../../userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState("");

  const initialState = {
    username: "",
    userPassword: "",
  };

  const [user, setUser] = useState(initialState);

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
    }
  };

  function onChangeHandler(e) {
    setErrorMsg("");
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    axios
      .post("http://localhost:10001/user/login", user)
      .then((response) => {
        console.log(response.data);
        dispatch(loginUser(response.data));
      })
      .catch((error) => {
        console.error(error);
        console.log(error.response);
        //does not alert user
        setErrorMsg("Username or Password is Incorrect");
        setUser(initialState);
      });
  }

  function onClickHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/Register";
  }

  return (
    <div>
      <section>
        <div className="container">
          <div className='row'>
            <div className="col-md-6">

              <div className="logo-login">
                <img className='logo' src={logo} alt="mint"></img>
              </div>
              <br></br>
              <div className="text-area">
                <div className="brand-name">
                  <h1>
                    MiniMint
                  </h1>
                </div>
                <br></br>

                <div className="brand-motto">
                  <h2>
                    Some Mints a day<br></br>
                    Helps keep the bored away.
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <br></br>
              <form className="login-form" onSubmit={onSubmitHandler}>

              <div className="mb-3">
                  <p className="form-label1">Login</p>
                  </div>
                 
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" name="username" placeholder="Enter Your Username" value={user.username} onChange={onChangeHandler} required />
                  {" "}
                  {/* <br></br> */}
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" name="userPassword" placeholder="Password" value={user.userPassword} onChange={onChangeHandler} required />
                  <br></br>
                  <div className="messages">{displayMessage()}</div>
                </div>

                <button type="submit" className="btn btn-login">Log In</button>
                <hr></hr>
                <p>Not yet registered?</p>

                <button type="submit" className="btn btn-regis " onClick={onClickHandler}>Create Account</button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};
export default LoginForm;
