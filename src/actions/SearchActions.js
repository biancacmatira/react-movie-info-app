import { SEARCH_MOVIE, FETCH_MOVIES } from "./Types";
import { API_KEY } from "../API_KEY";
import axios from "axios";

const key = API_KEY;
export const SearchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${key}&s${text}`)
    .then((res) => dispatch({ type: FETCH_MOVIES, payload: res.data }))
    .catch((err) => console.log(err));
};
