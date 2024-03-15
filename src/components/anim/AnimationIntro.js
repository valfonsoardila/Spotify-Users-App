import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { resources } from "../../assets/resources";
import Particles from "./Particles";
import "./AnimationIntro.css";

const AnimationIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="intro-container"
    >
      <Particles id="particles" />
      <img src={resources.logo} alt="logo de Spotify" />
      <h1 style={{color:'var(--textSecondary)', marginTop:'1%'}}>Millions of users.</h1>
      <h1 style={{marginTop:'-2%'}}>Tuning with Spotify</h1>
      <p>Disfruta la mejor comunidad sonora y vibra con sus historias</p>
    </motion.div>
  );
};

export default AnimationIntro;
