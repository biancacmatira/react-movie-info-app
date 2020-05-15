import React from "react";
import { connect } from "react-redux";
import { SearchMovie, fetchMovies } from "../actions/SearchActions";

class Form extends React.Component {
  onChange = (e) => {
    this.props.SearchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    console.log(this.props.text);
  };

  render() {
    return (
      <div className="formDiv">
        <form id="searchForm" onSubmit={this.onSubmit}>
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

export default connect(mapStateToProps, { SearchMovie, fetchMovies })(Form);
