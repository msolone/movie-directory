import React, { Component } from "react";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {},
      movieId: this.props.match.params.id,
      movieCast: {
          cast: [{}]
      }
    };
  }

  componentDidMount() {
    const movieURL = `https://api.themoviedb.org/3/movie/${
      this.state.movieId
    }?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;
    fetch(movieURL)
      .then(resp => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          // handle error
        }
      })
      .then(json => {
        this.setState({
          movieData: json
        });
      });

      const castURL = `https://api.themoviedb.org/3/movie/${
        this.state.movieId
      }/credits?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;
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
    console.log(this.state.movieCast);
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
        <h3>{this.state.movieCast.cast[0].name} as {this.state.movieCast.cast[0].character}</h3>
        <h3>Run Time: {this.state.movieData.runtime} mins</h3>
        </section>
      </section>
    );
  }
}

export default MovieDetails;
