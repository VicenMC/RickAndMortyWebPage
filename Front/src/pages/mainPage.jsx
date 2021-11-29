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
    const dispatch = useDispatch();
      useEffect(() => {
    dispatch(Chars());
  }, [dispatch]);

    const characters = useSelector((state) => state.Characs);
    let contenedor = characters;

const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(89);

  const indexOfLastPost = currentPage * postsPerPage;
  const indxOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contenedor.slice(indxOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
 
 const Busqueda = (arg) => {
   arg === ""
   ? dispatch(Chars())
   : dispatch(Buscar(arg));
   setCurrentPage(1);
 }
   return(
  <div className="generalContainer">


  <SearchBar busqueda={Busqueda}/>
  <Pagination
  characters={characters}
          postsPerPage={postsPerPage}
          totalPosts={contenedor.length}
          paginate={paginate}
        />
        <div className="characterContainer">
        <Characters posts={currentPosts} loading={loading} />
        </div>
        
</div>

  )
}

//  <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" className="logoImage" alt="" />