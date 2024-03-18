import React, { useState } from "react";
import "./LayoutDashboard.css";
import Container from "./container/Container";
import Sidebar from "./sidebar/Sidebar";

const LayoutDashboard = () => {
  const [hovered, setHovered] = useState(false);

  const handleHoverChange = (isHovered) => {
    setHovered(isHovered);
  };
  return (
    <div className="layout-dashboard">
      <div className="dashboard-container">
        <Sidebar onHoverChange={handleHoverChange} />
        <Container hovered={hovered} />
      </div>
    </div>
  );
};

export default LayoutDashboard;
