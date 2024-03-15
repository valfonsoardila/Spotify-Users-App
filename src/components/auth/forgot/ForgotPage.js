import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ButtonLogin from "../../utils/buttonAuth/ButtonLogin";
import Input from "../../utils/input/Input";
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
        <h1>Spotify Users</h1>
        <div className="title-container">
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleBackClick} />
          <span>Reset password</span>
        </div>
      </div>
      <div className="formcontainer">
        <div className="inputcontainer">
          <Input
            type="text"
            placeholder="Email o Phone number"
            value={inputValue}
            onChange={handleInputChange}
          />
          {error && <p className="error">{error}</p>}
        </div>
        <ButtonLogin
          text="Send me a reset code"
          mode="view-web"
          icon={""}
          colorIcon={"white"}
          margin={"10px"}
        />
      </div>
    </>
  );
};

export default ForgotPage;
