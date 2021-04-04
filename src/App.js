import "./App.css";
import { useState } from "react";

import Searchbar from "./components/Searchbar/index";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const searchbarHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="app">
      <Searchbar searchbarHandler={searchbarHandler} />
      {inputValue && <ImageGallery inputValue={inputValue} />}
      {inputValue && <Button />}
    </div>
  );
};

export default App;
