import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutImg from '../assets/vijay.jpg';
import './AboutMe.css';

const AboutMe = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // Simulate image load time
    return () => clearTimeout(timer);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <section className="about-me">
      <div className="terminal-container main-container">
        <div className="terminal-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="default-text">Last login: Sat Jun 29 14:22:13 on ttys000</div>
        <div className="default-text">vijay@portfolio:~$</div>
        <h1 className="about-me-title">About Me</h1>
        <div className="about-me-content">
          <motion.div
            className="terminal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="default-text">vijay@portfolio:~$</div>
            <div className="box">
              <motion.img
                src={AboutImg}
                alt="About me"
                className={`about-img ${loaded ? 'loaded' : ''}`}
                initial="hidden"
                animate={loaded ? "visible" : "hidden"}
                variants={imageVariants}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </motion.div>
          <motion.div
            className="terminal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="default-text">vijay@portfolio:~$</div>
            <div className="box">
              <p className="terminal-text">
                Hello, I’m Vijay M. My academic journey, grounded in Mathematics, has profoundly shaped my exploration and expertise in computer science.
              </p>
              <p className="terminal-text">
                <br />
                Mathematics provides the underlying framework for many computer science concepts. The rigorous problem-solving methodologies and analytical skills I developed during my BSc in Mathematics are directly applicable to programming and algorithm development.
              </p>
              <p className="terminal-text">
                <br />
                In my pursuit of a Master’s degree in Computer Applications (MCA), I leverage this mathematical foundation to navigate and innovate in areas such as data analysis, software development, and algorithm optimization.
              </p>
              <p className="terminal-text">
                <br />
                As a Web3 enthusiast, I am passionate about exploring and applying decentralized technologies and blockchain concepts in my projects.
              </p>
              <p className="terminal-text">
                <br />
                My commitment to lifelong learning drives me to stay at the forefront of technological advancements and industry trends.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
