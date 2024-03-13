import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonLogin from "../../utils/buttonLogin/ButtonLogin";
import "./ForgotPage.css";

const ForgotPage = ({ onComponentChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const handleBackClick = () => {
    onComponentChange("login");
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Expresión regular para validar un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar números de teléfono (solo números, espacios, guiones y paréntesis permitidos)
    const phoneRegex = /^[0-9 ()+-]+$/;

    if (emailRegex.test(inputValue)) {
      setError("");
      // Aquí puedes hacer algo si el valor es un email, por ejemplo, enviarlo a un servidor o realizar alguna acción
    } else if (phoneRegex.test(inputValue)) {
      setError("");
      // Aquí puedes hacer algo si el valor es un número de teléfono
    } else {
      setError("Please enter a valid email or phone number");
    }
  };
  return (
    <>
      <div className="logocontainer">
        <h1>Spotify</h1>
        <div className="title-container">
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleBackClick} />
          <span>Forgot your password?</span>
        </div>
      </div>
      <div className="formcontainer">
        <div className="inputcontainer">
          <input
            type="text"
            placeholder="Email o Phone number"
            className="input"
            required
            value={inputValue}
            onChange={handleInputChange}
          />
          {error && <p className="error">{error}</p>}
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

export default ForgotPage;