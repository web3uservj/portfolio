// src/components/ImageModal.js
import React from 'react';
import Modal from 'react-modal';
import './ImageModal.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, imageSrc, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        &times;
      </button>
      <img src={imageSrc} alt={imageAlt} className="modal-image" />
    </Modal>
  );
};

export default ImageModal;
