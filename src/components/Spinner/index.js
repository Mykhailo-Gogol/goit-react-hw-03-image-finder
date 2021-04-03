import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
  return (
    <Loader
      className="loader"
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      delay={1000}
    />
  );
};

export default Spinner;
