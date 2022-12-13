export function searchFilm(movies) {
    return {
      type: "SEARCH",
      payload: {
       movies: movies
      },
    };
  }
  
  export function fetchFilm(s) {
    return dispatch=> {
      fetch(`http://www.omdbapi.com/?s=${s}&apikey=abe9f44`)
        .then((responce) => responce.json())
        .then((data) => {
          dispatch(searchFilm(data.Search));
        });
    };
  } 
  export function addFilm(id) {
    return {
      type: "ADD",
      payload: {
        id: id,
     },
    };
  }
  
  export function deleteFilm(id) {
    return {
      type: "DEL",
      payload: {
        id: id,
      },
    };
  }
  
  export function saveFilm(listID) {
    return {
      type: "SAVE_FILM",
      payload: {
        listID: listID,
      },
    };
  }
  
  export function postFilm(title, favIDarray) {
    return dispatch=> {
      let savedList = {
        title: title,
        movies: favIDarray,
      };
      
      fetch(`https://acb-api.algoritmika.org/api/movies/list/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(savedList),
      })
        .then((responce) => responce.json())
        .then((data) => {
          dispatch(saveFilm(data.id));
        });
    };
  }
  
  