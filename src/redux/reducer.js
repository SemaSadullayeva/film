const initialState = {
    movies: [],
    favList: [],
    title: "",
    listID: "",
  };
  
  function reducer(store = initialState, action) {
    switch (action.type) {
      case "SEARCH":
        return { ...store, movies: action.payload.movies,
        };
      case "ADD":
        const newState = { ...store };
        const id = action.payload.id;
  
        if (newState.movies.find((item) => item.imdbID === id)) {
          const match = newState.movies.find((item) => item.imdbID === id);
          newState.favList = [...newState.favList, { ...match }];
        }
        return newState;
      case "DEL":
        const newFilms = store.favList.filter(
          (item) => item.imdbID !== action.payload.id
        );
        return { ...store, favList: newFilms };
      case "SAVE_FILM":
        return {
          ...store,
          listID: action.payload.listID,
        };
      default:
        return store;
    }
  }
  export default reducer;