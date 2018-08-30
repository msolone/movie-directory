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
          <section className="header">Header</section>
          <section className='body'>
          <Switch>
            <Route path="/" exact component={NowShowingList} />
            <Route path="/:key" exact component={MovieDetails} />
          </Switch>
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
