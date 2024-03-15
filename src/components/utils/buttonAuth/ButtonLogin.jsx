import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonLogin = ({ text, mode, icon, colorBg, colorIcon, margin }) => {
  return (
    <button
      style={{
        width: "70%",
        borderRadius: "50px",
        cursor: "pointer",
        backgroundColor: colorBg,
        border: "none",
        marginTop: margin,
        marginBottom: margin,
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#35c567")}
      onMouseOut={(e) => (e.target.style.backgroundColor = colorBg)}
    >
      {mode === "view-phone" ? (
        <h3 style={{ color: colorIcon, marginRight: "4%", marginLeft: "4%" }}>
          {text}
        </h3>
      ) : icon ? (
        <FontAwesomeIcon icon={icon} style={{ color: colorIcon }} />
      ) : (
        <h3 style={{ color: colorIcon, margin:'0', fontSize: "15px" }}>{text}</h3>
      )}
    </button>
  );
};

export default ButtonLogin;
