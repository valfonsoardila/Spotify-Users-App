import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonLogin from "../../utils/buttonAuth/ButtonLogin";
import Input from "../../utils/input/Input";
import "./RegisterPage.css";

const RegisterPage = ({ onComponentChange }) => {
  const handleBackClick = () => {
    onComponentChange("login");
  };
  return (
    <>
      <div className="logocontainer">
        <h1>Spotify Users</h1>
        <div className="title-container">
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleBackClick} />
          <span>Sign up</span>
        </div>
      </div>
      <div className="formcontainer">
        <div className="inputcontainer">
          <Input type="text" placeholder="Username" />
        </div>
        <div className="inputcontainer">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="inputcontainer">
          <Input type="password" placeholder="Password" />
        </div>
        <ButtonLogin
          text="Sign up"
          mode="view-web"
          icon={""}
          colorIcon={"white"}
          margin={"10px"}
        />
      </div>
    </>
  );
};

export default RegisterPage;
