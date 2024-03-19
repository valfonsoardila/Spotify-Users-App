import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../header/Header";
import Home from "../../../views/home/Home";
import "./Container.css";

const Container = ({ hovered, activeComponent }) => {
  return (
    <div
      className="container-blur"
      style={{
        filter: hovered ? "blur(5px)" : "none",
      }}
    >
      <motion.div className="main-container">
        <Header path={"Inicio"} />
        <div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="content-container"
        >
          {activeComponent === "home" && (
            <Home />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Container;
