import React, { Component } from 'react';
import './ListPage.css';
import { connect } from "react-redux";
class ListPage extends Component {
    componentDidMount() {
         const id = this.props.match.params;
        console.log(id);
    }
    render() { 
        console.log(this.props);
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.props.favList.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={"https://www.imdb.com/title/"+item.imdbID} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="list-page__link-imdb">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}  
  const mapStateToProps = (store) => ({favList: store.favList})
export default connect(mapStateToProps)(ListPage);