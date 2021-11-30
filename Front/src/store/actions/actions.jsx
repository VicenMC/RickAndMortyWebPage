import axios from 'axios';

export const Chars = (page) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/characters?page=${page}`);
      if(response?.data){
        dispatch({type: "CHARS", payload: {chars: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}

export const Buscar =(arg, page) => {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/characters?name=${arg}&&page=${page}`);
      if(response?.data){
        dispatch({type: "BUSCAR", payload: {searchCarac: response.data}})
      }
    }catch(error){
      console.log(error)
    }
  }
}