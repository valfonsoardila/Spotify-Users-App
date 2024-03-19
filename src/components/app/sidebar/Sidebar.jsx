import React, { useState } from "react";
import { resources } from "../../../assets/resources";
import Item from "./items/Item";
import SearchBar from "./searchBar/SearchBar";
import { faBookBookmark, faCompass, faHome, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ onHoverChange, onComponentChange }) => {
  const [onHover, setOnHover] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home"); // Nuevo estado para el ítem seleccionado

  const handleMouseEnter = () => {
    setOnHover(true);
    onHoverChange(true); // Llamamos a la función del padre con true
  };

  const handleMouseLeave = () => {
    setOnHover(false);
    onHoverChange(false); // Llamamos a la función del padre con true
  };
  const handleMenuItemClick = (menuItemName) => {
    setSelectedItem(menuItemName); // Establecer el ítem seleccionado al hacer clic en él
    onComponentChange(menuItemName); // Llamar a la función de cambio de componente
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
        <Item onHover={onHover} text={"Inicio"} icon={faHome} onClick={() => handleMenuItemClick("home")} />
        <Item onHover={onHover} text={"Explorar"} icon={faCompass} onClick={() => handleMenuItemClick("explore")} />
        <Item onHover={onHover} text={"Crear red"} icon={faUserFriends} onClick={() => handleMenuItemClick("grid")} />
        <Item onHover={onHover} text={"Mi biblioteca"} icon={faBookBookmark} onClick={() => handleMenuItemClick("library")} />
      </div>
    </div>
  );
};

export default Sidebar;
