import "./ImageGalleryItem.scss";

const ImageGalleryItem = ({ webformatURL, largeImageURL, onToggleModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        data-large={largeImageURL}
        onClick={onToggleModal}
      />
    </li>
  );
};

export default ImageGalleryItem;
