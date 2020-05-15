import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMovie, setLoading } from "../actions/Actions";
import Loader from "./Loader";

class Movie extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body mCard">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4 mTitle">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item mDetail">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item mDetail">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item mDetail">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item mDetail">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item mDetail">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item mDetail">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item mDetail">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light mAboutDiv">
            <div className="col-md-12 mAbout">
              <h3 className="mTitle">About </h3>
              {movie.Plot}
              <hr />
              <a
                href={"https://www.imdb.com/title/" + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary cardBtn"
              >
                View on IMDB
              </a>
              &nbsp;&nbsp;&nbsp;
              <Link to="/" className="btn btn-default text-light cardBtn">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Loader /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
