import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MediaChoice extends Component {
    render() {
        return (
            <div className='media-choice'>
                <Link to='./movie'><h1>Movies</h1></Link>
                <Link to='./tv'><h1>TV</h1></Link>
            </div>
        );
    }
}

export default MediaChoice;
