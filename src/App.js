import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NowShowingList from "./Components/NowShowingList";
import MovieDetails from "./Components/MovieDetails";

class App extends Component {
  render() {
    // console.log(this.state.data.results[0].title);
    return (
      <Router>
        <section className="main">
          <section className="header">
            <h2>NOW SHOWING IN A THEATRE NEAR YOU!</h2>
          </section>
          <section className="body">
            <Switch>
              <Route path="/" exact component={NowShowingList} />
              <Route path="/:id" exact component={MovieDetails} />
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
