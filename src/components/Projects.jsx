import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import {
  FaBars, FaGithub, FaSearch, FaBell, FaUserCircle,
  FaEllipsisH, FaBook, FaSmile, FaUsers, FaUserPlus
} from 'react-icons/fa';

import portfImage from '../assets/proj1.png';
import analImage from '../assets/proj2.png';
import sonicImage from '../assets/proj3.png';
import newImage1 from '../assets/proj4.png';
import newImage2 from '../assets/proj5.png';
import newImage3 from '../assets/proj6.png';
import profileImage from '../assets/gitpro.png'; 

const projects = [
  {
    image: portfImage,
    title: "Video Game Sales Analysis Dashboard",
    description: "Dashboard analyzing global video game sales data across various regions.",
    languages: ["CSS", "JavaScript", "HTML"],
    githubLink: "https://github.com/web3uservj/Uncovering-the-Gaming-Industry-s-Hidden-Gems-A-Comprehensive-Analysis-of-Video-Game-Sales"
  },
  {
    image: analImage,
    title: "Student Portfolio Model using ReactJS",
    description: "Interactive portfolio showcasing student projects and achievements.",
    languages: ["CSS", "JavaScript"],
    githubLink: "https://github.com/web3uservj/portfolio"
  },
  {
    image: sonicImage,
    title: "Login Mechanism using Cookies and MongoDB",
    description: "Secure authentication system utilizing MongoDB for data storage.",
    languages: ["CSS", "HTML", "JavaScript"],
    githubLink: "https://github.com/web3uservj/login-mechanism"
  },
  {
    image: newImage1,
    title: "Student Database Model using MongoDB",
    description: "Database model for managing student information with MongoDB.",
    languages: ["HTML", "JavaScript"],
    githubLink: "https://github.com/web3uservj/store-details-using-mongodb-local-server"
  },
  {
    image: newImage2,
    title: "Automatic Transaction in Blockchain",
    description: "Tool to automate blockchain transactions using smart contracts.",
    languages: ["JavaScript"],
    githubLink: "https://github.com/web3uservj/Sonic-sol-transaction-"
  },
  {
    image: newImage3,
    title: "Event Storage Management using MySQL",
    description: "System to record and manage events data using MySQL database.",
    languages: ["JavaScript"],
    githubLink: "https://github.com/web3uservj/store-details-using-MySQL"
  }
];

const Project = () => {
  return (
    <div className="project-container">
      {/* Header */}
      <div className="headermod">
        <div className="left-icons">
          <div className="icon-wrapper">
            <FaBars className="icon" />
          </div>
        </div>
        <div className="center-logo">
          <FaGithub className="github-logo" />
          <span className="username">web3uservj</span>
        </div>
        <div className="right-icons">
          <div className="icon-wrapper">
            <FaSearch className="icon" />
          </div>
          <div className="icon-wrapper">
            <FaBell className="icon" />
          </div>
          <div className="icon-wrapper">
            <FaUserCircle className="icon" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="navigation">
        <div className="nav-item">
          <FaBook className="nav-icon" />
          <span>Overview</span>
        </div>
        <div className="nav-item">
          <FaBook className="nav-icon" />
          <span>Repositories</span>
        </div>
        <div className="right">
          <div className="icon-wrapper">
            <FaEllipsisH className="icon" />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile">
        <div className="profile-left">
          <motion.div 
            className="profile-icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={profileImage} alt="Profile" className="profile-image" loading="lazy" />
          </motion.div>
          <div className="profile-info-wrapper">
            <div className="profile-info">Vijay M</div>
            <div className="profile-username">web3uservj</div>
            <div className="follow-info">
              <div className="follow-item">
                <FaUsers className="follow-icon" />
                <span className="follow-count">50</span>
                <span className="follow-text">followers</span>
              </div>
              <div className="follow-item">
                <FaUserPlus className="follow-icon" />
                <span className="follow-count">30</span>
                <span className="follow-text">following</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-right">
          <div className="status-box">
            <FaSmile className="status-icon" />
            <div className="status-text">Set status</div>
          </div>
          <div className="edit-profile-btn">Edit Profile</div>
        </div>
      </div>

      {/* Projects Title in Profile Section */}
      <div className="projects-title">
        <h2>Projects</h2>
      </div>

      {/* Repositories Section */}
      <div className="repositories-header">
        <div className="popular-repositories">Popular Repositories</div>
        <div className="customize-pins">Customize your pins</div>
      </div>

      {/* Projects Section */}
      <motion.div 
        className="projects"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.6,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            className="project-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image fade-in"
              loading="lazy"
            />
            <div className="project-details">
              <h4>
                {project.title}
                <span className="public-text">Public</span>
              </h4>
              <p>{project.description}</p>
              <div className="languages">
                {project.languages.map((language, langIndex) => (
                  <div className="language-badge" key={langIndex}>
                    <span className={`language-dot ${language.toLowerCase()}`}></span>{language}
                  </div>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className="visit-btn">Visit</button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
