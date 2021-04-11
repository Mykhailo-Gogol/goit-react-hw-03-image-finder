import ".//Button.scss";

const Button = ({ onLoadMore }) => {
  return (
    <button className="Button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;
