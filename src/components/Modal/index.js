const Modal = ({ largeImageURL, handleModalClose }) => {
  return (
    <div className="Overlay" onClick={handleModalClose}>
      <div className="Modal">
        <img src={largeImageURL} alt={largeImageURL} />
      </div>
    </div>
  );
};

export default Modal;
