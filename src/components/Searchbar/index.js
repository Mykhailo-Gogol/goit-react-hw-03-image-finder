import { useState } from "react";

const SearchBar = ({ searchbarHandler }) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    const { value } = e.target;
    setInput(value);
    searchbarHandler(e);
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={inputHandler}
          />
        </form>
      </header>
    </>
  );
};

export default SearchBar;
