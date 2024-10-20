import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm VIJAY M
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am a{' '}
        <span className="typewriter-text">
          <Typewriter
            options={{
              strings: [' Software Developer', ' Java Developer', ' Web3 Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 50, // Adjust typing speed as needed
              pauseFor: 1000, // Pause between sentences
            }}
          />
        </span>
      </motion.h2>
      <motion.div
        className="button-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="https://drive.google.com/file/d/19q_m00e-2CkVSY2LPBPGXupNc44pgiV9/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="button">
          Resume
        </a>
        <a href="https://github.com/web3uservj" target="_blank" rel="noopener noreferrer" className="button">
          GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
