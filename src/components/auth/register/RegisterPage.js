import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonLogin from "../../utils/buttonLogin/ButtonLogin";
import "./RegisterPage.css";

const RegisterPage = ({ onComponentChange }) => {
  const handleBackClick = () => {
    onComponentChange("login");
  };
  return (
    <>
      <div className="logocontainer">
        <h1>Spotify</h1>
        <div className="title-container">
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleBackClick} />
          <span>Sign up</span>
        </div>
      </div>
      <div className="formcontainer">
        <div className="inputcontainer">
          <input type="text" placeholder="Email" className="input" required />
        </div>
        <div className="inputcontainer">
          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />
        </div>
        <div className="inputcontainer">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            required
          />
        </div>
        <ButtonLogin
          text="Sign up"
          mode="view-web"
          icon={""}
          colorBg={"#1db954"}
          colorIcon={"white"}
          margin={"10px"}
        />
      </div>
    </>
  );
};

export default RegisterPage;
