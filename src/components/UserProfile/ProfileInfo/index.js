import React, { useEffect } from "react";
import Contact from "./Contact";
import "../style.css";
import axios from "axios";

const ProfileInfo = () => {
  // const [userInfo, setUserInfo] = React.useState(null);

  // useEffect(() => {
  //   axios.get(/*DatabaseUrl/User*/).then((response) => {
  //     setUserInfo(response.data);
  //   });
  // }, []);

  // if (!userInfo) return null;

  return (
    <div className="container" style={{ textAlign: "left" }}>
      <div className="col">
        <div className="row">
          <div className="col">
            {/* <p>{userInfo.name}</p> */}
            <p>Mark Watson</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <p>{userInfo.dateOfBirth}</p> */}
            <p>Dec 25, 1998</p>
          </div>
          <div className="col">
            {/* <p>{userInfo.gender}</p> */}
            <p>Male</p>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            
          >
            <textarea maxLength={250} style={{
              height: "200px",
              width: "100%",
              marginBottom: "10px",
              boxSizing: "border-box",
              border: "0px",
              fontWeight: "normal",
              fontSize: "18px"
            }}>
              {/* {userInfo.bio} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </textarea>
          </div>
          {/* <button
            type="button"
            class="btn btn-danger"
            style={{ marginBottom: "100px" }}
          >
           <Contact label="Contact"
          //  mailto={userInfo.email} 
           />
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
