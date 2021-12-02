// import { MostrarMascotas } from "../store/actions/actions";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import React, { useState, useEffect } from "react";
// import "./Searchbar.css"


// export default function Searchbar({ Filtered }) {
//   return (
//     <header className="navbar">
//       <div>
//         <Link className="buttonLink" to="/home">
//           <button className="returnButton">Return to main page</button>
//         </Link>
//       </div>
//     </header>
//   );
// }

import { Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
return(
    <header className="navBar">
    <div>
    <Link className="linkHome" to="/home">
    <button className="buttonHome">Home</button>
    </Link>
    </div>
    </header>
)
}
