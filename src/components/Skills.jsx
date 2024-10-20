import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMicrophone, FaTimes } from 'react-icons/fa';
import { CgMoreVerticalAlt } from 'react-icons/cg';
import gitSvg from '../svg/git.svg';
import dockerSvg from '../svg/docker.svg';
import tableauSvg from '../svg/tableau.svg';
import microsoftSvg from '../svg/microsoft.svg';
import mysqlSvg from '../svg/mysql.svg';
import mongodbSvg from '../svg/mongo.svg';
import javascriptSvg from '../svg/js.svg';
import pythonSvg from '../svg/python.svg';
import javaSvg from '../svg/java.svg';
import cSvg from '../svg/c.svg';
import cppSvg from '../svg/c++.svg';
import htmlSvg from '../svg/hmtl.svg';
import './Skills.css';

const domainLabels = {
  'github.com': 'GitHub',
  'docker.com': 'Docker',
  'tableau.com': 'Tableau',
  'microsoft.com': 'Microsoft',
  'mysql.com': 'MySQL',
  'mongodb.com': 'MongoDB',
  'mozilla.org': 'Mozilla',
  'python.org': 'Python',
  'java.com': 'Java',
  'wikipedia.org': 'Wikipedia',
  'cplusplus.com': 'C++',
};

const Skills = () => {
  const skills = {
    tools: [
      {
        title: 'Git',
        url: 'https://github.com',
        description: 'Proficient in version control using Git and GitHub.',
        domain: 'github.com',
        icon: <img src={gitSvg} alt="Git Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'Docker',
        url: 'https://docker.com',
        description: 'Experienced in containerization using Docker.',
        domain: 'docker.com',
        icon: <img src={dockerSvg} alt="Docker Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'Tableau',
        url: 'https://www.tableau.com',
        description: 'Skilled in data visualization with Tableau.',
        domain: 'tableau.com',
        icon: <img src={tableauSvg} alt="Tableau Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'Microsoft Office',
        url: 'https://www.microsoft.com/en-us/microsoft-365',
        description: 'Experienced with Microsoft Office Suite.',
        domain: 'microsoft.com',
        icon: <img src={microsoftSvg} alt="Microsoft Office Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'MySQL',
        url: 'https://www.mysql.com/',
        description: 'Proficient in database management with MySQL.',
        domain: 'mysql.com',
        icon: <img src={mysqlSvg} alt="MySQL Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'MongoDB',
        url: 'https://www.mongodb.com',
        description: 'Experienced in NoSQL databases with MongoDB.',
        domain: 'mongodb.com',
        icon: <img src={mongodbSvg} alt="MongoDB Icon" className="icon" loading="lazy" />,
      },
    ],
    languages: [
      {
        title: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        description: 'Versatile language for web development.',
        domain: 'mozilla.org',
        icon: <img src={javascriptSvg} alt="JavaScript Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'Python',
        url: 'https://www.python.org/',
        description: 'Popular language for web development and data science.',
        domain: 'python.org',
        icon: <img src={pythonSvg} alt="Python Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'Java',
        url: 'https://www.java.com/',
        description: 'Object-oriented programming language widely used for enterprise applications.',
        domain: 'java.com',
        icon: <img src={javaSvg} alt="Java Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'C',
        url: 'https://en.wikipedia.org/wiki/C_(programming_language)',
        description: 'Foundational language for many modern programming languages.',
        domain: 'wikipedia.org',
        icon: <img src={cSvg} alt="C Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'C++',
        url: 'https://www.cplusplus.com/',
        description: 'Extension of C with object-oriented features.',
        domain: 'cplusplus.com',
        icon: <img src={cppSvg} alt="C++ Icon" className="icon" loading="lazy" />,
      },
      {
        title: 'HTML & CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        description: 'Core technologies for creating web pages.',
        domain: 'mozilla.org',
        icon: <img src={htmlSvg} alt="HTML & CSS Icon" className="icon" loading="lazy" />,
      },
    ],
  };

  // Define a motion variant for animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        <div className="category bing-style">
          <div className="bing-header">
            <img src={microsoftSvg} alt="Microsoft Logo" className="microsoft-image" loading="lazy" />
            <span className="bing-text">Microsoft Bing</span>
          </div>
          <div className="search-bar">
            <input type="text" value="Tools " readOnly />
            <div className="icons-container">
              <FaSearch className="search-icon" />
              <FaMicrophone className="microphone-icon" />
            </div>
          </div>
          {skills.tools.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="result"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className="domain-info">
                <div className="domain-icon">{item.icon}</div>
                <div className="domain-details">
                  <span className="major-domain">{domainLabels[item.domain]}</span>
                  <span className="domain" style={{ color: '#b0b0b0' }}>{item.domain}</span>
                </div>
              </div>
              <a href={item.url} className="link" target="_blank" rel="noopener noreferrer" >{item.title} </a>
              <div className="description-container">
                <span className="web-label">Web</span>
                <p className="description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="category google-style">
          <div className="google-header">
            <span className="google-text">
              <span className="g">G</span>
              <span className="o-red">o</span>
              <span className="o-yellow">o</span>
              <span className="g-blue">g</span>
              <span className="l">l</span>
              <span className="e-red">e</span>
            </span>
          </div>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" value="Programming Languages " readOnly />
            <div className="icons-container">
              <FaTimes className="x-icon" />
              <span className="pipe-icon">|</span>
              <FaMicrophone className="microphone-icon" />
            </div>
          </div>
          {skills.languages.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="result"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <CgMoreVerticalAlt className="three-dots" />
              <div className="domain-info">
                <div className="domain-icon">{item.icon}</div>
                <div className="domain-details">
                  <span className="major-domain">{domainLabels[item.domain]}</span>
                  <span className="domain" style={{ color: '#b0b0b0' }}>{item.domain}</span>
                </div>
              </div>
              <a href={item.url} className="link" target="_blank" rel="noopener noreferrer" >{item.title}</a>
              <p className="description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
