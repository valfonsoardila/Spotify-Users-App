import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonLogin = ({ text, mode, icon, colorBg, colorIcon, margin }) => {
  return (
    <button
      style={{
        width: "70%",
        borderRadius: "50px",
        cursor: "pointer",
        background: "linear-gradient(to right, rgba(24, 150, 68, 255) 10.73%, rgba(29, 185, 84, 255) 26.55%, rgba(53, 197, 103, 255) 41.24%, rgba(29, 185, 84, 255) 58.19%, rgba(53, 197, 103, 255) 80.27%, rgba(24, 150, 68, 255) 94.91%)",
        border: "none",
        marginTop: margin,
        marginBottom: margin,
        color: "white"
      }}
      onMouseOver={(e) => (e.target.style.background = "#3eb367")}
      onMouseOut={(e) =>
        (e.target.style.background = "linear-gradient(to right, rgba(24, 150, 68, 255) 10.73%, rgba(29, 185, 84, 255) 26.55%, rgba(53, 197, 103, 255) 41.24%, rgba(29, 185, 84, 255) 58.19%, rgba(53, 197, 103, 255) 80.27%, rgba(24, 150, 68, 255) 94.91%)")
      }
    >
      {mode === "view-phone" ? (
        <h3 style={{ color: colorIcon, marginRight: "4%", marginLeft: "4%" }}>
          {text}
        </h3>
      ) : icon ? (
        <FontAwesomeIcon icon={icon} style={{ color: colorIcon }} />
      ) : (
        <h3 style={{ color: colorIcon, margin: "0", fontSize: "15px" }}>
          {text}
        </h3>
      )}
    </button>
  );
};

export default ButtonLogin;
