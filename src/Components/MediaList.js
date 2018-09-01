import React, { Component } from "react";
import { Link } from "react-router-dom";

class MediaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        results: [{
          title: ''
        }]
      },
      mediaType: this.props.match.params.media,
      search: ""
    };
  }

  componentDidMount() {
    let URL = "";
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

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    console.log(this.state.data.results);
    let filteredMedia = this.state.data.results.filter(film => {
      return film.title.toLowerCase().includes(this.state.search.toLowerCase());
    });
    console.log(filteredMedia)
    return (
      <section className="movie-list">
        <input
          className="movie-list-input"
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <section className="movie-list-list">
          {filteredMedia.map((movie, i) => {
            return (
              <Link to={`./${this.state.mediaType}/${movie.id}`} key={i}>
                <img
                  className="movie-list-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </Link>
            );
          })}
        </section>
      </section>
    );
  }
}

export default MediaList;
