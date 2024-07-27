import React, { useState } from "react";
import Modal from "react-modal";

export const Image = ({ title, largeImage, smallImage }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <div className="hover-text" onClick={openModal}>
          <i className="icon-element fa fa-search"></i>
        </div>
        <img
          src={smallImage}
          className="small-img"
          alt={title}
          onClick={openModal}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-image"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content-image">
        <button className="modal-close-button" onClick={closeModal}>&times;</button>
          <img src={largeImage} alt={title} />
        </div>
      </Modal>
    </div>
  );
};
