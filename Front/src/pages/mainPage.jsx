import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Chars,
  Buscar
} from "../store/actions/actions.jsx";
import Pagination from "../components/Pagination";
import SearchBar from "../components/Searchbar";
import Characters from "../components/Characters";
import "./mainPage.css";
//background-image: url('http://pa1.narvii.com/6810/0f849dc1fdeabe3f6179139541619285a1776cba_00.gif');

export default function MainPage(props) {
  const [page, setPage] = useState(1);
    const dispatch = useDispatch();
      useEffect(() => {
    dispatch(Chars(page));
  }, [dispatch]);



    const characters = useSelector((state) => state.Characs);
    const totalPages = useSelector((state) => state.IncludedPages);
    const searchCharacs = useSelector((state) => state.searchedCharacters);

    let contenedor = characters;
    if(searchCharacs.length !== 0){
      contenedor = searchCharacs
    }else if(searchCharacs.length === 0){
      contenedor = characters
    }

const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(89);

  const indexOfLastPost = currentPage * postsPerPage;
  const indxOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contenedor.slice(indxOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
 



   //Pagination Buttons 

   let buttonR = document.getElementById('next');
   let buttonL = document.getElementById('prev');

   if(buttonL !== null && page === 1){
     document.getElementById('prev').style.visibility="hidden"
   }else if(buttonL !== null && page !== 1){
     document.getElementById('prev').style.visibility="visible"
   }
   if(buttonR !== null && page === totalPages[0]){
     document.getElementById('next').style.visibility="hidden"
   }else if(buttonR !== null && page !== totalPages[0]){
    document.getElementById('next').style.visibility="visible"
   }
//    if(buttonR !== null && page === 1){
// document.getElementById("prev").style.visibility="hidden";
// }else if(buttonR !== null && characters.length === 0){
//   document.getElementById("prev").style.visibility="hidden";

// }
// else if(page !== 1){
//   document.getElementById("prev").style.visibility="visible";
// }
// if(buttonL !== null && page === 1){
// document.getElementById("next").style.visibility="hidden";
// }else if(buttonL !== null && characters.length === 0){
//   document.getElementById("next").style.visibility="hidden";
// }
// else if(buttonL !== null && page !== 1){
//   document.getElementById("next").style.visibility="visible";
// }
   const pageChangeInc = () => {
  
     if(searchCharacs.length === 0){setPage(page + 1);
    dispatch(Chars(page + 1));}
    else if(searchCharacs.length !== 0){
      setPage(page + 1)
      dispatch(Buscar(currentSearch, page + 1))
    }
   
  };

  const pageChangeDec = () => {
    if(searchCharacs.length === 0){setPage(page - 1);
    dispatch(Chars(page - 1));}
    else if(searchCharacs.length !== 0){
      setPage(page - 1)
      dispatch(Buscar(currentSearch, page - 1))
    }
  };

const [currentSearch, setCurrentSearch] = useState("Initial");
if(currentSearch.length === 0){
  dispatch(Chars(1))
  setCurrentPage(1)
  setPage(1)
  setCurrentSearch("initial")
}
 const Busqueda = (arg) => {
   arg === ""
   ? dispatch(Chars())
   : 
   setPage(1);
   dispatch(Buscar(arg, 1));
   setCurrentSearch(arg);
   
 }
   return(
  <div className="generalContainer">
    <button className="prevButton" id="next" onClick={pageChangeInc}>next</button>
      <button className="nextButton" id="prev" onClick={pageChangeDec}>Prev</button>
  <SearchBar busqueda={Busqueda}/>
        <div className="characterContainer">
        <Characters posts={currentPosts} loading={loading} />
        </div>    
</div>
  )
}

//  <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" className="logoImage" alt="" />