const Button = () => {
  const handleLoadMore = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button className="submit__button" onClick={() => handleLoadMore()}>
      Load more
    </button>
  );
};

export default Button;
