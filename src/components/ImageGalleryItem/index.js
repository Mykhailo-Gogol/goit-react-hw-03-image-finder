import { useState } from "react";
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

export default ImageGalleryItem;
