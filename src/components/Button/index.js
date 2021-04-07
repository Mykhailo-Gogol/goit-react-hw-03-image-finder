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

export default Button;
