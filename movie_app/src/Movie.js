import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
       return (
        <div>
            <MoviePoster link={this.props.link}/>
            <h1> {this.props.title} </h1>
        </div>
       )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src = {this.props.link}/>
        )
    }
}

export default MovieCard;