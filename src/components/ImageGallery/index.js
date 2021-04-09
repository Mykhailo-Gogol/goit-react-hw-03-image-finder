import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import { warning, success } from "../../utils";

import fetchData from "../../services";
import ImageGalleryItem from "../ImageGalleryItem";
import Spinner from "../Spinner";
import Button from "../Button";

const ImageGallery = ({ inputValue }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [inputValue]);

  useEffect(() => {
    fetchData(inputValue, page)
      .then((response) => {
        if (response.data.hits.length === 0) {
          warning();
        } else {
          setImages((images) => [...images, ...response.data.hits]);
          success();
        }
      })
      .finally(() => setLoading(false));
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
      <ToastContainer onClick={() => console.log("👍 ")} />
    </>
  );
};

ImageGallery.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default ImageGallery;
