import React, { useState } from "react";
import { resources } from "../../../assets/resources";
import Item from "./items/Item";
import SearchBar from "./searchBar/SearchBar";
import { faBookBookmark, faCompass, faHome, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onHoverChange }) => {
  const [onHover, setOnHover] = useState(false);
  const handleMouseEnter = () => {
    setOnHover(true);
    onHoverChange(true); // Llamamos a la función del padre con true
  };

  const handleMouseLeave = () => {
    setOnHover(false);
    onHoverChange(false); // Llamamos a la función del padre con true
  };

  return (
    <div
      className="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-logo">
        <img src={resources.logo} alt="logo" />
        <h1
          style={
            onHover ? { display: "flex",  transition: "all 0.1s ease" } : { display: "none"  }
          }
        >Spotify Users</h1>
      </div>
      <div className="sidebar-search">
        <SearchBar onHover={onHover} />
      </div>
      <div className="sidebar-menu">
        <Item onHover={onHover} text={"Inicio"} icon={faHome} />
        <Item onHover={onHover} text={"Explorar"} icon={faCompass} />
        <Item onHover={onHover} text={"Crear red"} icon={faUserFriends} />
        <Item onHover={onHover} text={"Mi biblioteca"} icon={faBookBookmark} />
      </div>
    </div>
  );
};

export default Sidebar;
