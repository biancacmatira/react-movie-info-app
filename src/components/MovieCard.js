import React from "react";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // console.log(movie);
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100 cardDiv">
          <img
            className="w-100 mb-2 cardImg"
            src={movie.Poster}
            alt="Movie Cover"
          />
          <p className="cardTitle">
            {movie.Title} <span className="cardYear">({movie.Year})</span>
          </p>

          <Link
            className="btn btn-primary cardBtn"
            to={"/movie/" + movie.imdbID}
          >
            Movie Details
            {/* <i className="fas fa-chevron-right" /> */}
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
