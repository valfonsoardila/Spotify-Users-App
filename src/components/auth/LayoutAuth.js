import React, { useState } from "react";
import "./LayoutAuth.css";
import { resources } from "../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import ForgotPage from "./forgot/ForgotPage";
import { motion } from "framer-motion";

const LayoutAuth = () => {
  const [activeComponent, setActiveComponent] = useState("login");
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };
  return (
    <div
      className="maincontainer"
      style={{ backgroundImage: `url(${resources.bgAuth})` }}
    >
      <div className="blur-main">
        <div className="container">
          <div className="container-option-mode">
            <span>Dark Mode</span>
            <div className="option-mode-icon">
              <FontAwesomeIcon icon={faMoon} />
            </div>
          </div>
          <div className="container-logo">
            <img src={resources.logo} alt="logo" />
          </div>
          <motion.div
            className="container-auth"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {activeComponent === "login" && (
              <LoginPage onComponentChange={handleComponentChange} />
            )}
            {activeComponent === "register" && (
              <RegisterPage onComponentChange={handleComponentChange} />
            )}
            {activeComponent === "forgot" && (
              <ForgotPage onComponentChange={handleComponentChange} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
