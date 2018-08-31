import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MediaChoice from "./Components/MediaChoice";
import MediaList from "./Components/MediaList";
import MediaDetails from "./Components/MediaDetails"


class App extends Component {
  render() {
    return (
      <Router>
        <section className="main">
          <section className="header">
            <h2>NOW SHOWING IN A THEATRE NEAR YOU!</h2>
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
