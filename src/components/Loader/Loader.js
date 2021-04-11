import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.scss";
import ReactLoader from "react-loader-spinner";

const Loader = () => {
  return (
    <ReactLoader
      type="Rings"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={500}
      className="Loader"
    />
  );
};

export default Loader;
