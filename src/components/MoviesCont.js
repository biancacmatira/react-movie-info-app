import React from "react";
import { connect } from "react-redux";

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
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
