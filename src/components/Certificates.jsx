import React, { useState } from 'react';
import { motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Certificates.css';
import ImageModal from './ImageModal';
import { FaHeart, FaCommentDots, FaShareAlt } from 'react-icons/fa';

import cert1 from '../assets/p1.png';
import cert2 from '../assets/p2.png';
import cert3 from '../assets/p3.png';
import cert4 from '../assets/p4.png';
import cert5 from '../assets/p5.png';
import cert6 from '../assets/p6.png';

const certificates = [
  {
    id: 1,
    name: 'Cyber Security Awareness',
    provider: 'Data Security Council of India',
    image: cert1,
    description: 'An extensive awareness program on cyber security principles and best practices to protect against modern cyber threats.',
  },
  {
    id: 2,
    name: 'Data Analytics with Tableau',
    provider: 'Smart Bridge Educational Services',
    image: cert2,
    description: 'In-depth training on data analytics using Tableau, focusing on data visualization and actionable insights.',
  },
  {
    id: 3,
    name: 'Embedded System (Arduino)',
    provider: 'Pantech E Learning Pvt. Ltd',
    image: cert3,
    description: 'Comprehensive training on building and programming embedded systems using Arduino, including practical projects and applications.',
  },
  {
    id: 4,
    name: 'Research Opportunities in CS',
    provider: 'National Institute of Technology',
    image: cert4,
    description: 'A workshop providing insights into current research trends and opportunities in computer science, including tech and methodologies.',
  },
  {
    id: 5,
    name: 'Hackathon Kanitamil24',
    provider: 'Tamil Virtual Academy',
    image: cert5,
    description: 'Participation in the Hackathon Kanitamil24, showcasing skills in problem-solving and innovation in a competitive environment.',
  },
  {
    id: 6,
    name: 'Idea for the Vision',
    provider: 'Viksit Bharat',
    image: cert6,
    description: 'An online program focused on vision-based projects and innovative ideas to drive technological advancements and societal impact.',
  },
];

const githubLink = 'https://github.com/web3uservj';

const Certificates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [liked, setLiked] = useState(new Array(certificates.length).fill(false));
  const navigate = useNavigate();

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  const handleLikeClick = (index) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  const handleCommentClick = () => {
    navigate('/contact');
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(githubLink).then(() => {
      alert('GitHub link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="certificates">
      <h2>Certificates</h2>
      <Slider {...settings} className="certificates-slider">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="certificate-card"
          >
            <div
              className="certificate-image-container"
              onClick={() => openModal(cert.image)}
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="certificate-image"
              />
              <div className="certificate-overlay">Click Me</div>
            </div>
            <div className="certificate-details">
              <h3>{cert.name}</h3>
              <h4>{cert.provider}</h4>
              <p>{cert.description}</p>
              <div className="certificate-actions">
                <FaHeart
                  className="icon"
                  style={{ color: liked[index] ? 'red' : 'rgba(255, 255, 255, 0.6)' }}
                  onClick={() => handleLikeClick(index)}
                />
                <FaCommentDots
                  className="icon"
                  onClick={handleCommentClick}
                />
                <FaShareAlt
                  className="icon"
                  onClick={handleShareClick}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageSrc={selectedImage}
        imageAlt="Certificate"
      />
    </section>
  );
};

export default Certificates;
