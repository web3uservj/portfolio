import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling
import { FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaTools, FaGraduationCap, FaAward, FaEnvelope } from 'react-icons/fa'; // Import icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <NavLink to="/" className="name" onClick={() => setIsMenuOpen(false)}>
        VIJAY M
      </NavLink>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              <FaUser className="nav-icon" /> About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              <FaProjectDiagram className="nav-icon" /> Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/skills"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              <FaTools className="nav-icon" /> Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/education"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              <FaGraduationCap className="nav-icon" /> Education
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/certificates"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              <FaAward className="nav-icon" /> Certificates
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              <FaEnvelope className="nav-icon" /> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
