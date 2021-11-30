import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, characters }) => {
  const pageNumbers = [];
  let numberPage = 3;
  const [page, setPage] = useState(1);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  const lastPage = Math.round(characters.length/89)
  const pageChangeInc = () => {
    setPage(page + 1);
   paginate(page + 1);
  };

  const pageChangeDec = () => {
    setPage(page - 1);
    paginate(page - 1);
  };

  let buttonR = document.getElementById('prev');
  let buttonL = document.getElementById('last');

// if(buttonR !== null && page === 1){
// document.getElementById("prev").style.visibility="hidden";
// }else if(buttonR !== null && characters.length === 0){
//   document.getElementById("prev").style.visibility="hidden";

// }
// else if(page !== 1){
//   document.getElementById("prev").style.visibility="visible";
// }


// if(buttonL !== null && page === lastPage + 1){
// document.getElementById("last").style.visibility="hidden";
// }else if(buttonL !== null && characters.length === 0){
//   document.getElementById("last").style.visibility="hidden";
// }
// else if(buttonL !== null && page !== lastPage+1){
//   document.getElementById("last").style.visibility="visible";
// }

  return (
    <nav>
    <div className="buttonContainer" >
      <button className="prevButton" id="last" onClick={pageChangeInc}>next</button>
      <button className="nextButton" id="prev" onClick={pageChangeDec}>Prev</button>
      </div>
    </nav>
  );
};

export default Pagination;
