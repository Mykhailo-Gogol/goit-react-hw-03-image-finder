import { useState } from "react";
import Modal from "../Modal";

const ImageGalleryItem = ({ largeImageURL, webformatURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleCloseModalOnEscape = () => (e) => {
  //   if (e.key === "Escape") {
  //     setIsOpen(false);
  //     console.log("Hello");
  //   }
  // };

  const handlerModalOpen = () => {
    setIsOpen(true);
    // window.addEventListener("keydown", handleCloseModalOnEscape(e));
  };

  const handleModalClose = (e) => {
    if (e.target.className === "Overlay") {
      setIsOpen(false);
    }
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={handlerModalOpen}
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
