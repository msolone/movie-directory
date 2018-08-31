import React, { Component } from 'react';

class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieData: {},
            movieId: this.props.match.params.id
        }
    }
    

    componentDidMount() {
    
        const URL =
        `https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;
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
            movieData: json
          });
        });

    }

    
    render() {
        return (
            <h1>
                Mike Solone
            </h1>
        );
    }
}

export default MovieDetails;
