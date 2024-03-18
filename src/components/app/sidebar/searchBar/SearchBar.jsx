import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onHover }) => {
  const [isWriting, setIsWriting] = useState(false);
  return (
    <div
      className="search-bar"
      style={
        onHover
          ? {
              justifyContent: "normal",
            }
          : {
              justifyContent: "center",
            }
      }
    >
      <FontAwesomeIcon
        icon={faSearch}
        style={
          isWriting
            ? { display: "none", transition: "all 0.1s ease" }
            : { display: "flex", margin: "0 10px 0 10px" }
        }
      />
      <input
        type="text"
        placeholder="Buscar"
        style={
          onHover
            ? { display: "flex", transition: "all 0.1s ease" }
            : { display: "none" }
        }
        onChange={(e) => {
          if (e.target.value.length > 0) {
            setIsWriting(true);
          } else {
            setIsWriting(false);
          }
        }}
      />
      <div
        className="search-button"
        style={
          onHover && !isWriting
            ? { display: "none", transition: "all 0.5s ease" }
            : onHover && isWriting
            ? { display: "flex", transition: "all 0.5s ease" }
            : !onHover && isWriting
            ? { background: "transparent", transition: "all 0.1s ease" }
            : { display: "none", transition: "all 0.5s ease" }
        }
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
