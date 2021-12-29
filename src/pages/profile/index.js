import React from "react";
import ProfilePic from "../../components/UserProfile/ProfilePic";
import ProfileInfo from "../../components/UserProfile/ProfileInfo";
import ProfilePosts from "../../components/UserProfile/ProfilePosts";

const Profile = () => {

  return (
    <div className="container" style={{ textAlign: "center", marginTop: '200px'}}>
      <div className="col">
        <div className="row">
          <div className="col" align="center">
            <ProfilePic />
          </div>
          <div className="col">
            <ProfileInfo />
          </div>
        </div>
        <div className="row">
          <ProfilePosts />
        </div>
      </div>
    </div>
  );
};
export default Profile;
