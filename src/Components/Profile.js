import React from "react";
import "./style-component/profile-des.css";
import Contactus from "./Contactus";
const Profile = () => {
  return (
    <div className="profile-box">
      <div className="des-name">
        <div className="name-text">User Name</div>
      </div>
      <div>
        <div className="email-text">
          username@gmail.com{" "}
          <a href="/" style={{ fontSize: "20px" }}>
            Change
          </a>
        </div>
        <div className="email-text">
          Password: ********{" "}
          <a href="/" style={{ fontSize: "20px" }}>
            Change
          </a>
        </div>
      </div>
      <Contactus />
    </div>
  );
};

export default Profile;
