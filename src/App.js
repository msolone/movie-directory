import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MediaChoice from "./Components/MediaChoice";
import MediaList from "./Components/MediaList";
import MediaDetails from "./Components/MediaDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <section className="main">
          <section className="header">
            <section className="logo">
              <a href="http://localhost:3000">
                <h2>JMMDb</h2>
              </a>
            </section>
          <section className="header-links">
            <a href="http://localhost:3000/movie">
              <h1>Movies</h1>
            </a>
            <a href="http://localhost:3000/tv">
              <h1>TV Shows</h1>
            </a>
          </section>
          </section>
          <section className="body">
            <Switch>
              <Route path="/" exact component={MediaChoice} />
              <Route path="/:media" exact component={MediaList} />
              <Route path="/:media/:id" exact component={MediaDetails} />
            </Switch>
          </section>
          <section className="footer">
            <h3>Created by Jeff Webb and Michael Solone</h3>
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
