const API_KEY="df9344e4c83e26311353e96b5b0e5ea5";
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
  const data= await response.json();
  return data.results;
}

export const searchMovies = async (query) => {
  const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
  const data= await response.json();
  return data.results;
}