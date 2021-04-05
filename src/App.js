import "./App.css";
import { useState } from "react";

import SearchBar from "./components/SearchBar/index";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (value) => {
    setInputValue(value);
  };

  return (
    <div className="app">
      <SearchBar handleFormSubmit={handleFormSubmit} />
      {inputValue && <ImageGallery inputValue={inputValue} />}
      {inputValue && <Button />}
    </div>
  );
};

export default App;
