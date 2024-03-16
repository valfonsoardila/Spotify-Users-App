import React from "react";
import ButtonSocial from "../../utils/buttonAuth/ButtonSocial";
import ButtonLogin from "../../utils/buttonAuth/ButtonLogin";
import Input from "../../utils/input/Input";
import "./LoginPage.css";
import { faMobile, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const LoginPage = ({ onComponentChange }) => {
  const handleRegisterClick = () => {
    onComponentChange("register");
  };
  const handleForgotClick = () => {
    onComponentChange("forgot");
  };
  const login = () => {
    window.location.href = "/home";
  };
  return (
    <>
      <div className="logocontainer">
        <h1>Spotify Users</h1>
        <span>Login</span>
      </div>
      <div className="formcontainer">
        <div className="inputcontainer">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="inputcontainer">
          <Input type="password" placeholder="Password" />
          <div className="form-other-links">
            <div className="forgot-password">
              <span onClick={handleForgotClick}>Forgot your password?</span>
            </div>
            <div className="register">
              <span onClick={handleRegisterClick}>Don't have an account?</span>
            </div>
          </div>
          <ButtonLogin
            text="Iniciar sesion"
            mode="view-web"
            icon={faAngleRight}
            colorIcon={"white"}
            margin={"0px"}
          />
        </div>
        <div className="divider">
          <hr />
            <span>or</span>
          <hr />
        </div>
        <div className="social-login-buttons">
          <ButtonSocial
            text=""
            icon={faMobile}
            color={"black"}
            type={"mobile"}
          />
          <ButtonSocial text="" icon={faGoogle} type={"google"} />
          <ButtonSocial
            text=""
            icon={faFacebook}
            color={"#3B5998"}
            type={"facebook"}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
