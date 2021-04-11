import "./App.scss";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import api from "./services/pixabay";
import { warning, success } from "./utils/notifications";
import ImageGallery from "./components/ImageGallery/";
import Searchbar from "./components/Searchbar/";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (searchQuery) {
      fetchImages();
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  const fetchImages = () => {
    setLoading(true);
    api
      .fetchImages(searchQuery, currentPage)
      .then((hits) => {
        if (hits.length === 0) {
          warning();
        } else {
          success();
        }
        setImages((prevState) => [...prevState, ...hits]);
        setCurrentPage((prevState) => prevState + 1);
      })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => {
        setLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  const onChangeQuery = (query) => {
    setSearchQuery(query);
    if (query !== searchQuery) {
      setCurrentPage(1);
      setImages([]);
    }
    setErrorMessage(null);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const addModalImage = ({ target }) => {
    const { large } = target.dataset;
    setCurrentImage(large);
    toggleModal();
  };

  const shouldRenderLoadMoreBtn = images.length > 0 && !loading;

  return (
    <>
      {errorMessage ? (
        <h1>{errorMessage.toUpperCase()}</h1>
      ) : (
        <div>
          <Searchbar onSubmit={onChangeQuery} />
          <ImageGallery images={images} onToggleModal={addModalImage} />
          {loading && <Loader />}
          {shouldRenderLoadMoreBtn && <Button onLoadMore={fetchImages} />}
          {showModal && currentImage && (
            <Modal
              onClose={toggleModal}
              currentImage={currentImage}
              toggleModal={toggleModal}
            />
          )}
          <ToastContainer />
        </div>
      )}
    </>
  );
};
export default App;
