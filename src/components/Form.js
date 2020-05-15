import React from "react";
import { connect } from "react-redux";
import { searchMovie, fetchMovies, setLoading } from "../actions/Actions";

class Form extends React.Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="formDiv">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="formBar"
            name="formText"
            placeholder="Type to search.."
            onChange={this.onChange}
          />
          <button type="submit" className="formBtn">
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(Form);
