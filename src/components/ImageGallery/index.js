import ImageGalleryItem from "../ImageGalleryItem";
import { useState, useEffect } from "react";

const ImageGallery = ({ inputValue }) => {
  const [images, setImages] = useState([]);

  const sendRequest = async (input) => {
    try {
      const apiKey = "19918904-c3236105177a74f036d1e644e";
      const page = 1;

      const response = await fetch(
        `https://pixabay.com/api/?q=${input}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      const { hits } = await data;
      setImages(hits);
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => sendRequest(inputValue), [inputValue]);

  return (
    <ul className="ImageGallery">
      {images.length &&
        images.map(({ id, largeImageURL, webformatURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
