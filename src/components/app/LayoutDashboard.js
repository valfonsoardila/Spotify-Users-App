import React, { useState } from "react";
import "./LayoutDashboard.css";
import Container from "./container/Container";
import Sidebar from "./sidebar/Sidebar";

const LayoutDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("home");
  const [hovered, setHovered] = useState(false);

  const handleHoverChange = (isHovered) => {
    setHovered(isHovered);
  };
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <div className="layout-dashboard">
      <div className="dashboard-container">
        <Sidebar onHoverChange={handleHoverChange} onComponentChange={handleComponentChange} />
        <Container hovered={hovered} activeComponent={activeComponent} />
      </div>
    </div>
  );
};

export default LayoutDashboard;
