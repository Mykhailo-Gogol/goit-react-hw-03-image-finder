import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ handleFormSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    return value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(inputValue);
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </header>
    </>
  );
};

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
