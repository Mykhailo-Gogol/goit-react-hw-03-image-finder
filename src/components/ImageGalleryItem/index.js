const ImageGalleryItem = ({ largeImageURL, webformatURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        data-large-image={largeImageURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
