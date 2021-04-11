import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "19918904-c3236105177a74f036d1e644e";

const fetchImages = (searchQuery = "", currentPage = 1, pageSize = 12) => {
  return axios
    .get(
      `?q=${searchQuery}&key=${API_KEY}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then(({ data }) => data.hits);
};

const api = { fetchImages };

export default api;
