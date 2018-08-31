import React, { Component } from 'react';

class TVDetails extends Component {
    constructor(props) {
        super(props);
        console.log("ctor of tv details")
        this.state = {
          tvData: {},
          tvId: this.props.match.params.id,
          tvCast: {
              cast: [{}]
          }
        };
      }
    
      componentDidMount() {
        const tvURL = `https://api.themoviedb.org/3/tv/${
          this.state.tvId
        }?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1`;
        console.log("fetching", {tvURL})
        fetch(tvURL)
          .then(resp => {
            if (resp.status === 200) {
              return resp.json();
            } else {
              // handle error
            }
          })
          .then(json => {
            this.setState({
              tvData: json
            });
          });
    
          const castURL = `https://api.themoviedb.org/3/tv/${
            this.state.tvId
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
                tvCast: json
              });
            });
      }
    
      render() {
        console.log(this.state.tvData);
        console.log(this.state.tvCast);
        return (
          <section className="movie-details">
            <section>
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  this.state.tvData.poster_path
                }`}
                alt={this.state.tvData.poster_path}
              />
            </section>
            <section className="movie-details-info">
            <h1>{this.state.tvData.title}</h1>
            <h2>{this.state.tvData.overview}</h2>
            <h3>{this.state.tvCast.cast[0].name} as {this.state.tvCast.cast[0].character}</h3>
            </section>
          </section>
        );
      }
}

export default TVDetails;
