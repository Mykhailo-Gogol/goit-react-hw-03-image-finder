import { useState, useEffect } from "react";

import ImageGalleryItem from "../ImageGalleryItem";
import Spinner from "../Spinner";

const ImageGallery = ({ inputValue }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendRequest = async (input) => {
    try {
      const apiKey = "19918904-c3236105177a74f036d1e644e";
      const page = 1;

      const response = await fetch(
        `https://pixabay.com/api/?q=${input}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      const { hits } = await data;
      setTimeout(() => {
        setLoading(false);
        setImages(hits);
      }, 1000);
    } catch ({ message }) {
      console.log(message);
    }
  };

  useEffect(() => sendRequest(inputValue), [inputValue]);

  return (
    <ul className="ImageGallery">
      {loading ? (
        <Spinner />
      ) : (
        images.map(({ id, largeImageURL, webformatURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
            />
          );
        })
      )}
    </ul>
  );
};

export default ImageGallery;
