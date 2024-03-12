import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import particlesJS from 'particles.js';
import particlesJson from '../../assets/particles/particlesjs-config.json';

const AnimationIntro = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsIntroVisible(false), 3000);
    particlesJS.load('particles-js', particlesJson);
    return () => {
      clearTimeout(timeout);
      particlesJS.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="intro-container"
    >
      <div id="particles-js"></div>
      <img src="logo.png" alt="Logo de Spotify" />
      <h1>Bienvenido a Spotify</h1>
      <p>Disfruta de millones de canciones, podcasts y mucho más.</p>
    </motion.div>
  );
};

export default AnimationIntro;
