import axios from "axios";

const movie_URL = "https://api.themoviedb.org/3";
const api_Key = "35ab711299b7e099bdfb72b6220f9603";

//https://api.themoviedb.org/3/trending/all/day?api_key=35ab711299b7e099bdfb72b6220f9603

const trendingMovies = axios.get(
  movie_URL + "/trending/all/day?api_key=" + api_Key
);

export default { trendingMovies };
