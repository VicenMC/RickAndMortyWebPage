const initialState = {
  Characs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHARS": {
      state = initialState;
      // console.log("reducer" + action.payload[0].name)
      return {
        ...state,
        Characs: state.Characs.concat(action.payload.chars.flat()),
      };
    }
    case "BUSCAR":{
      state = initialState;
      return {
        ...state,
        Characs: state.Characs.concat(action.payload.searchCarac)
      }
    }
    default: {
      return state;
    }
 }
};

export default reducer;
