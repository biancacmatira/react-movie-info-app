import { SEARCH_MOVIE, FETCH_MOVIES } from "../actions/Types";

const initState = {
  text: "",
  movies: [],
  movie: [],
  loading: false,
};

export default function (state = initState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
