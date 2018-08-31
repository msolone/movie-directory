import React, { Component } from "react";

class MediaDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {},
      movieTitle: {},
      id: this.props.match.params.id,
      mediaType: this.props.match.params.media,
      movieCast: {
        cast: [{}]
      }
    };
  }

  componentDidMount() {
    let URL = `https://api.themoviedb.org/3/${this.state.mediaType}/${
      this.state.id
    }?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;
    let castURL = `https://api.themoviedb.org/3/${this.state.mediaType}/${
      this.state.id
    }/credits?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;

    fetch(URL)
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          // handle error
        }
      })
      .then(json => {
        const _movie = {
          title: json.title ? json.title : json.name,
          poster_path:json.poster_path,
          overview:json.overview
        };
        this.setState({
          movieData: _movie
        });
      });

    fetch(castURL)
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          // handle error
        }
      })
      .then(json => {
        this.setState({
          movieCast: json
        });
      });
  }

  render() {
    console.log(this.state.movieData);
    // console.log(this.state.movieCast);
    return (
      <section className="movie-details">
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w500${
              this.state.movieData.poster_path
            }`}
            alt={this.state.movieData.poster_path}
          />
        </section>
        <section className="movie-details-info">
          <h1>{this.state.movieData.title}</h1>
          <h2>{this.state.movieData.overview}</h2>
          <h3>
            {this.state.movieCast.cast[0].name} as{" "}
            {this.state.movieCast.cast[0].character}
          </h3>
          {/* <h3>Run Time: {this.state.movieData.runtime} mins</h3> */}
        </section>
      </section>
    );
  }
}

export default MediaDetails;
