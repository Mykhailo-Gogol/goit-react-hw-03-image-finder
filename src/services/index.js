import axios from "axios";

const apiKey = "19918904-c3236105177a74f036d1e644e";

const fetchData = (inputValue, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .catch((err) => console.log(err));
};

export default fetchData;
