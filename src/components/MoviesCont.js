import React, { useEffect } from "react";
import { connect } from "react-redux";
// import {fetchMovies} from '../actions/Actions'

import MovieCard from "./MovieCard";

class MoviesContainer extends React.Component {
  render() {
    // const { movies } = this.props.movies;
    console.log(this.props.movies);
    let content = "";

    content =
      this.props.movies.Response === "True"
        ? this.props.movies.Search.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))
        : null;

    // useEffect(() => {
    //   const initFetch = async (title) => {
    //     setState(await fetchMovies(title));
    //   };
    //   initFetch();
    // }, [setFetchedCountries]);

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
