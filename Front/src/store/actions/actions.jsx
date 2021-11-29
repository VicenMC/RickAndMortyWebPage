import axios from 'axios';

export const Chars = (page) => {
  return async (dispatch) => {
    try{
      const response = await axios.get('/characters');
      if(response?.data){
        dispatch({type: "CHARS", payload: {chars: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}

export const Buscar =(arg) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/characters?name=${arg}`);
      if(response?.data){
        dispatch({type: "BUSCAR", payload: {searchCarac: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}