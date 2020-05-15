import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Movie from "./components//Movie";

import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
