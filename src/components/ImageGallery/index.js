import { useState, useEffect } from "react";
import axios from "axios";
import ImageGalleryItem from "../ImageGalleryItem";
import Spinner from "../Spinner";

const ImageGallery = ({ inputValue }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => sendRequest(inputValue), [inputValue]);

  const sendRequest = async (input) => {
    const apiKey = "19918904-c3236105177a74f036d1e644e";
    const page = 1;

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${input}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setTimeout(() => {
        setLoading(false);
        setImages(response.data.hits);
      }, 200);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <ul className="ImageGallery">
      {loading ? (
        <Spinner />
      ) : (
        images.map(({ id, largeImageURL, webformatURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              tags={tags}
            />
          );
        })
      )}
    </ul>
  );
};

export default ImageGallery;
