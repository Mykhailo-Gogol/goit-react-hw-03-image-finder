import "./App.css";
import { useState } from "react";

import SearchBar from "./components/SearchBar/index";
import ImageGallery from "./components/ImageGallery";

const App = () => {
  const [inputValue, setInputValue] = useState("");

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
