import React from "react";

const ProfilePic = () => {
  function getPfp() {
    return null;
  }

  return (
    <div className="container" style={{ fontWeight: "bold" }}>
      <div className="col">
        <div clasName="row">
          <div style={{
              border: "1px solid #C4C4C4",
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              overflow: "hidden",
              verticalAlign: "middle",
              marginBottom: "20px"
          }}>
            <img src="" alt="" class="avatar" />
          </div>
        </div>
        <div className="row">
          <p>Alias</p>
          <p>@UserName</p>
        </div>
      </div>
    </div>
  );
};
export default ProfilePic;
