import React from "react";
import { connect } from "react-redux";

import MoviesCont from "./MoviesCont";
import Loader from "./Loader";

export class Main extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <div className="container">{loading ? <Loader /> : <MoviesCont />}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Main);
