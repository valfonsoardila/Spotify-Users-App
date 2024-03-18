import React from "react";
import { resources } from "../../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Profile.css";
import { faBell, faMessage } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="profile">
      <div className="messages">
        <FontAwesomeIcon icon={faMessage} />
      </div>
      <div className="notifications">
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="profile-name">
        <h3>John Doe</h3>
      </div>
      <div className="profile-image">
        <img src={resources.user} alt="profile" />
      </div>
    </div>
  );
};

export default Profile;
