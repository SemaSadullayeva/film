import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { connect } from "react-redux";
import './Movies.css';
class Movies extends Component {
     
    render() { 
        return ( 
            <ul className="movies">
                {this.props.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      movies: state.movies,
    };
  };
  export default connect(mapStateToProps)(Movies);