import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";
import { deleteFilm, postFilm } from "../../redux/actions";
import { Link } from "react-router-dom";
class Favorites extends Component {
    state = {
        active: false,
        title: "",
    };
    favoriteChangeHandler = (event) => {
      this.setState({ title: event.target.value })
    };
    
    getImdbIDArray = () => {
      let favIDarray = this.props.favList.map((item) => {
        return item.imdbID;
      });
      return favIDarray;
    };
    saveListHandler = () => {
      this.setState({ active: true});
      this.props.postFilm(this.state.title, this.getImdbIDArray());
     
    };
    render() {
        return (
            <div className="favorites">
                <input   value={this.state.title}
                placeholder='Введите название списка'  
                className="favorites__name"
               onChange={this.favoriteChangeHandler}
               />
                <ul className="favorites__list">
                    {this.props.favList.map((item) => {
                 return (<li key={item.imdbID}>{item.Title} ({item.Year})
                 <button className="remove-favorite-movie"
                  onClick={() =>
                    this.props.deleteFilm(item.imdbID)
                  }>X</button></li>);
                    })}
                </ul>
                {!this.state.active ? (
                <button className="favorites__save" 
                onClick={this.saveListHandler}
                disabled={!this.state.title}
                >Сохранить список</button>
                ):(
            <Link
              to={"/list/" + this.props.listID}
              className="link-to__list"
            >
              Перейти к списку
            </Link>
                )}
            </div>
        );
    }
}
const mapStateToProps = (store) => {
  return {
    favList: store.favList,
    favIDarray: store.favIDarray,
    listID: store.listID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFilm: (id) => {
      dispatch(deleteFilm(id));
    },
    postFilm: (title, favIDarray) => {
      dispatch(postFilm(title, favIDarray));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
