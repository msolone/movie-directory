import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NowShowingList from "./Components/NowShowingList";
import MovieDetails from "./Components/MovieDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        results: [{}]
      }
    };
  }

  componentDidMount() {
    const URL =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1";
    fetch(URL)
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          // handle error
        }
      })
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  render() {
    console.log(this.state.data.results[0].title);
    return (
      <Router>
        <section className="main">
          <section className="header">Header</section>
          <section className='body'>
          <Switch>
            <Route path="/" exact component={NowShowingList} />
            <Route path="/:id" exact component={MovieDetails} />
          </Switch>
          </section>
        </section>
      </Router>
    );
  }
}

export default App;
