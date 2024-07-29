import React, { ReactNode } from "react";
import "./Modal.css";

interface props {
  toggleModal: () => void;
  children: ReactNode;
}

const Modal = ({ children, toggleModal }: props) => {
  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content">
        {children}
        <button className="close-modal" onClick={toggleModal}>
          <i className="fas fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
