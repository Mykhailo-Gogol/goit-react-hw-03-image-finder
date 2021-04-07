import PropTypes from "prop-types";

const Button = ({ handleLoadMoreImages }) => {
  const handleLoadMore = () => {
    handleLoadMoreImages();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button className="Button" onClick={() => handleLoadMore()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMoreImages: PropTypes.func.isRequired,
};

export default Button;
