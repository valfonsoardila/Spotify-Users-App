import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Item.css";

const Item = ({ onHover, text, icon }) => {
  return (
    <div className="item-menu">
      <FontAwesomeIcon icon={icon}
        style={
            onHover ? { marginRight: "10px", transition: "all 0.1s ease" } : { marginRight: "0px" }
        }
       />
      <span
        style={
          onHover
            ? { display: "flex", transition: "all 0.1s ease" }
            : { display: "none" }
        }
      >
        {text}
      </span>
    </div>
  );
};

export default Item;
