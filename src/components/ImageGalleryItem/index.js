import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";

const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = ({ target }) => {
    if (target.className === "Overlay") {
      setIsOpen(false);
    }
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={[tags]}
        className="ImageGalleryItem-image"
        onClick={handleModalOpen}
      />
      {isOpen && (
        <Modal
          largeImageURL={largeImageURL}
          handleModalClose={handleModalClose}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};

ImageGalleryItem.defaultProps = {
  largeImageURL: "https://i.stack.imgur.com/l60Hf.png",
  webformatURL: "https://i.stack.imgur.com/l60Hf.png",
};

export default ImageGalleryItem;
