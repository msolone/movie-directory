import React, { Component } from "react";
import { Link } from "react-router-dom";

class MediaChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
          results: [{
              poster_path: ''
          }]
      }
    };
  }

  componentDidMount() {
    let URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;

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
    let random = Math.floor(Math.random() * 20);
    console.log(this.state.data.results[0].id);
    return (
      <div className="media-choice">
        <Link to="./movie">
          <h1>Movies</h1>
        </Link>
        <Link to={`./movie/${this.state.data.results[0].id}`} className='movie-of-the-week-link'>
          <h3>Movie of the Week!</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${
              this.state.data.results[0].poster_path
            }`} alt='movie of the day' className='movie-of-the-day-img'
          />
        </Link>
        <Link to="./tv">
          <h1>&nbsp;&nbsp;&nbsp;TV&nbsp;&nbsp;&nbsp;</h1>
        </Link>
      </div>
    );
  }
}

export default MediaChoice;
