import React, { Component } from "react";
import { Link } from "react-router-dom";

class MediaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        results: [{}]
      }
    };
  }

  componentDidMount() {
    let URL = ''
    const mediaType = this.props.match.params.media;
    if (mediaType === "movie") {
      URL = `https://api.themoviedb.org/3/${mediaType}/now_playing?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;
    } else {
      URL = `https://api.themoviedb.org/3/${mediaType}/popular?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;
    }
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
    console.log(this.state.data.results);
    return (
      <section>
        {this.state.data.results.map((movie, i) => {
          return (
            <Link to={`./movie/${movie.id}`} key={i}>
              <h1>{movie.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </Link>
          );
        })}
      </section>
    );
  }
}

export default MediaList;
