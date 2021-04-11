import { useEffect } from "react";
import "./Modal.scss";

const Modal = ({ currentImage, toggleModal }) => {
  const handleCloseOnEscape = (event) => {
    if (event.code === "Escape") {
      toggleModal();
    }
  };
  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleCloseOnEscape);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("keydown", handleCloseOnEscape);
  });

  return (
    <div className="Overlay" onClick={handleBackdropClose}>
      <div className="Modal">
        <img src={currentImage} alt="fullscreen preview" />
      </div>
    </div>
  );
};

export default Modal;
