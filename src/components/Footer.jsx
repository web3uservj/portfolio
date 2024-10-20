// src/components/Footer.js
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css'; // Import the Footer CSS

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-left">
          <p>Developed by Vijay M</p>
        </div>
        <div className="footer-section footer-center">
          <p>&copy; {year} Vijay M. All rights reserved.</p>
        </div>
        <div className="footer-section footer-right">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/web3uservj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://in.linkedin.com/in/vjmaths"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
