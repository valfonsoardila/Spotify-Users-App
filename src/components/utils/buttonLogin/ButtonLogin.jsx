import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonLogin = ({ text, mode, icon, colorBg, colorIcon }) => {
  return (
    <button
      style={{
        width: "-webkit-fill-available",
        borderRadius: "50px",
        backgroundColor: colorBg,
        border: "none",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#35c567")}
      onMouseOut={(e) => (e.target.style.backgroundColor = colorBg)}
    >
      {mode === "view-phone" ? (
        <h3 style={{color:colorIcon, marginRight:'4%', marginLeft:'4%'}}>{text}</h3>
      ):(
        <FontAwesomeIcon icon={icon} style={{ color: colorIcon}} />
      ) }
    </button>
  );
};

export default ButtonLogin;
