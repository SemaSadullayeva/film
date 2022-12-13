import React, { Component } from 'react';
import { connect } from "react-redux";
import './MovieItem.css';
import { addFilm } from "../../redux/actions";
class MovieItem extends Component {
    ifIdInFavorites = (imdbID) => {
        const active = this.props.favList.find((item) => {
          return item.imdbID === imdbID;
        });
        if (active) {
          return true;
        }
      };
    render() {
        const { Title, Year, Poster,imdbID  } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button"
                    onClick={()=>{this.props.addFilm(imdbID);}}
                    disabled={this.ifIdInFavorites(imdbID)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
const mapStateToProps = (store) => {
    return {
      favList: store.favList,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addFilm: (imdbID) => {
        dispatch(addFilm(imdbID));
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);