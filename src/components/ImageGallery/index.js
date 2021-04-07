import { useState, useEffect } from "react";
import axios from "axios";

import ImageGalleryItem from "../ImageGalleryItem";
import Spinner from "../Spinner";
import Button from "../Button";

const ImageGallery = ({ inputValue }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const apiKey = "19918904-c3236105177a74f036d1e644e";

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [inputValue]);

  useEffect(() => {
    try {
      axios
        .get(
          `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) => {
          setTimeout(() => {
            setLoading(false);
            setImages((images) => [...images, ...response.data.hits]);
          }, 200);
        });
    } catch ({ message }) {
      console.log(message);
    }
  }, [inputValue, page]);

  const handleLoadMoreImages = () => {
    setPage(page + 1);
  };

  return (
    <>
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
      {inputValue && <Button handleLoadMoreImages={handleLoadMoreImages} />}
    </>
  );
};

export default ImageGallery;
