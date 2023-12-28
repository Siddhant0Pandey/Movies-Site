import axios from "axios";

const movie_URL = "https://api.themoviedb.org/3";
const api_Key = "35ab711299b7e099bdfb72b6220f9603";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=35ab711299b7e099bdfb72b6220f9603";

//https://api.themoviedb.org/3/trending/all/day?api_key=35ab711299b7e099bdfb72b6220f9603

const trendingMovies = axios.get(
  movie_URL + "/trending/all/day?api_key=" + api_Key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default { trendingMovies, getMovieByGenreId };

// 35ab711299b7e099bdfb72b6220f9603
