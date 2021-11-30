const initialState = {
  Characs: [],
  searchedCharacters:[],
  IncludedPages:[],
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
console.log(action.payload.searchCarac)
      return {
        ...state,
        searchedCharacters: state.searchedCharacters.concat(action.payload.searchCarac[1]),
        IncludedPages: state.IncludedPages.concat(action.payload.searchCarac[0])
      }
    }
    default: {
      return state;
    }
 }
};

export default reducer;
