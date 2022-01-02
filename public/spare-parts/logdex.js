import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import "./index.css";
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
    <div className="container">
      <div className="containerLeft">
        <div className="text-left">
          <h1>MiniMint</h1>
          <h2>
            Some Mints a day
            <br />
            Helps keep the bored away.
          </h2>
        </div>
      </div>

      <div className="containerRight">
        <form className="form" onSubmit={onSubmitHandler}>
          <img className="logo" src={logo} />
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
              onChange={onChangeHandler}
              required
            />{" "}
            <br></br>
          </div>
          <br />
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="userPassword"
              value={user.userPassword}
              onChange={onChangeHandler}
              required
            />
            <br />
            <br />
            <div className="messages">{displayMessage()}</div>
            <button className="btn-login" type="submit">
              Log In
            </button>
          </div>
          <hr />
          <button className="btn-register" onClick={onClickHandler}>
            Create an Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
