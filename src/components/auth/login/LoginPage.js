import React from "react";
import ButtonSocial from "../../utils/buttonLogin/ButtonSocial";
import ButtonLogin from "../../utils/buttonLogin/ButtonLogin";
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
        <h1>Spotify</h1>
        <span>Login</span>
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
          <ButtonLogin text="Iniciar sesion" mode="view-web" icon={faAngleRight} colorBg={"#1db954"} colorIcon={"white"} />
        </div>
        <div className="divider">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <div className="social-login-buttons">
          <ButtonSocial text="Continue with phone number" icon={faMobile} color={"black"} />
          <ButtonSocial text="Continue with Google" icon={faGoogle} />
          <ButtonSocial text="Continue with Facebook" icon={faFacebook} color={"#3B5998"} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
