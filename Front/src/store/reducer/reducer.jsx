const initialState = {
  Characs: [],
  searchedCharacters:[],
  IncludedPages:[],
  Episodes:[],
  FiltradoEpisodes:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHARS": {
      state = initialState;
      return {
        ...state,
        Characs: state.Characs.concat(action.payload.chars[1]),
        IncludedPages: state.IncludedPages.concat(action.payload.chars[0])
      };
    }
    case "BUSCAR":{
      state = initialState;
      return {
        ...state,
        searchedCharacters: state.searchedCharacters.concat(action.payload.searchCarac[1]),
        IncludedPages: state.IncludedPages.concat(action.payload.searchCarac[0])
      }
    }case "EPISODES":{
      return{
        ...state,
        Episodes: state.Episodes.concat(action.payload.episodes)
      }
    }case "FILTRAREPISODIOS":{
      return{
        ...state,
        FiltradoEpisodes:state.Characs.concat(action.payload.arg)
      }
    }
    default: {
      return state;
    }
 }
};

export default reducer;
