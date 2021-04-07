import "./App.css";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/index";
import ImageGallery from "./components/ImageGallery";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const handleFormSubmit = (value) => {
    setInputValue(value);
  };

  return (
    <div className="app">
      <SearchBar handleFormSubmit={handleFormSubmit} />
      {inputValue && <ImageGallery inputValue={inputValue} />}
    </div>
  );
};

export default App;
