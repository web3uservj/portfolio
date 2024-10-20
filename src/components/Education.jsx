import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons'; // Import the medal icon
import './Education.css'; // Import your CSS file for additional styling

import instituteImage from '../assets/uce.png';
import universityImage from '../assets/voc.png';
import highSchoolImage from '../assets/bmc.png';

const educationData = [
  {
    institution: 'UCE BIT Campus Anna University Trichy',
    degree: 'MCA',
    duration: '2023 - 2025',
    image: instituteImage,
    score: 'CGPA:8.25/10',
    description: [
      '📚  Acquired comprehensive knowledge in advanced computing topics.',
      '💻  Developed practical skills in programming and software development.',
      '🎓  Enhanced understanding of emerging technologies and their applications.',
      '🔧  Gained hands-on experience through various projects and internships.'
    ],
    link: 'http://www.aubit.edu.in/' // Add a link to the institute
  },
  {
    institution: 'V.O.Chidambaram College',
    degree: 'BSc Mathematics',
    duration: '2020 - 2023',
    image: universityImage,
    score: 'CGPA:8.96/10',
    description: [
      '🔢  Built a strong foundation in mathematical theories and applications.',
      '📊  Gained experience in statistical analysis and problem-solving.',
      '🧮  Applied mathematical models to real-world problems and projects.',
      '🧪  Engaged in research projects involving complex mathematical computations.'
    ],
    link: 'https://voccollege.ac.in/' // Add a link to the university
  },
  {
    institution: 'B.M.C Higher Secondary School',
    degree: 'High School',
    duration: '2017 - 2020',
    image: highSchoolImage,
    score: 'PERC:89%',
    description: [
      '📚  Developed essential academic skills across various subjects.',
      '🎓  Participated in extracurricular activities and leadership roles.',
      '🗣️  Improved communication and teamwork abilities through school projects.',
      '🏆  Achieved recognition in academic and extracurricular achievements.'
    ],
    link: 'https://bmcschools.in/' // Add a link to the high school
  }
];

const Education = () => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateX(0px)', // Change to horizontal movement
    from: { opacity: 0, transform: 'translateX(50px)' }, // Animate from right to left
    config: { tension: 200, friction: 50 }
  });

  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <animated.div key={index} className="degree-card" style={props}>
            <div className="card-img">
              <img
                src={item.image}
                alt={item.institution}
                className="education-image"
              />
            </div>
            <div className="card-body">
              <div className="body-header">
                <div className="body-header-title">
                  <h2 className="card-title">{item.institution}</h2>
                  <h3 className="card-subtitle">{item.degree}</h3>
                </div>
                <div className="body-header-duration">
                  <h3 className="duration">{item.duration}</h3>
                </div>
              </div>
              <div className="body-content">
                <p className="content-list">
                  <ul>
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </p>
                <div className="score-label">
                  <FontAwesomeIcon icon={faMedal} className="score-icon" /> {/* Changed to medal icon */}
                  {item.score}
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="visit-button">Visit Institute</button>
                </a>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
