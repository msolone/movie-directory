import React, { Component } from "react";
import {Link} from "react-router-dom";

class NowShowingList extends Component {
  render() {
    return (
      <section>
          <Link to={'./hello'}>
        <h1> Now Showing Jeff Webb </h1>
        </Link>
      </section>
    );
  }
}

export default NowShowingList;
