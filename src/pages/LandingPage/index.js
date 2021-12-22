import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";

const LandingPage = () => {

    return (
        <body>
            <div className="textbox">
                <h1>
                    MiniMint
                </h1>
                <h2>
                    Some Mints a day<br></br>
                    Helps keep the bored away.
                </h2>
            </div>


            <div className="container">
                <div className="form">
                    <input type="text" placeholder="Enter Your Email or Username" /> <br></br>
                    <input type="password"  placeholder="Password" /><br/><br/>
                    <button>
                        Log In
                    </button>
                    <p><a href ="/">forgot your password?</a></p>
                    <div className="btn">
                        <button>Create an Account</button>
                    </div>
                </div>

            </div>
        </body>

    );
};

export default LandingPage;