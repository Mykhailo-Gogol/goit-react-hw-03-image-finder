import PropTypes from "prop-types";

const Modal = ({ largeImageURL, handleModalClose }) => {
  return (
    <div className="Overlay" onClick={handleModalClose}>
      <div className="Modal">
        <img src={largeImageURL} alt={largeImageURL} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
};

export default Modal;
