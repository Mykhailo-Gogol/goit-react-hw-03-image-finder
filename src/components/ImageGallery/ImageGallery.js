import "./ImageGallery.scss";
import ImageGalleryItem from "../ImageGalleryItem/";

const ImageGallery = ({ images, onToggleModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
