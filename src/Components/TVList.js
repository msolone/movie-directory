import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TVList extends Component {
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
          "https://api.themoviedb.org/3/tv/popular?api_key=3d986795ed5bf93d949ce7ee0258c436&language=en-US&page=1";
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
        console.log(this.state.data.results)
        return (
          <section>
          {this.state.data.results.map((show, i ) => {
            return (
            <Link to={`./tv/${show.id}`} key={i}>
              <h1>{show.id}</h1>
              <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}/>
            </Link>
            );
    
            })}
            </section>
        )
      }

}

export default TVList;
