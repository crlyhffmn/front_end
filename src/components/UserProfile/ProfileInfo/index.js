import React, { useEffect } from "react";
import Contact from "./Contact";
import "../style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state);
  const [userInfo, setUserInfo] = React.useState(null);

  const info = (x) => {
    dispatch({ type: "change", payload: x });
  };

  useEffect(() => {
    console.log('flag')
    axios.get("http://localhost:9007/profiles/1").then((response) => {
      info(response.data);
    });
    
  }, []);

  console.log(profile)

  if (!profile) return null;

  return (
    <div className="container" style={{ textAlign: "left" }}>
      <div className="col">
        <div className="row">
          <div className="col">
            <p>
              {profile.name}
              {profile.id}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{profile.dob}</p>
          </div>
          <div className="col">
            <p>{profile.gender}</p>
          </div>
        </div>
        <br />
        <div className="row">
          <div>
            <textarea
              maxLength={250}
              style={{
                height: "200px",
                width: "100%",
                marginBottom: "10px",
                boxSizing: "border-box",
                border: "0px",
                fontWeight: "normal",
                fontSize: "18px",
              }}
            >
              {profile.bio}
            </textarea>
          </div>
          <button
            type="button"
            class="btn btn-danger"
            style={{ marginBottom: "100px" }}
            mailto={profile.email}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
