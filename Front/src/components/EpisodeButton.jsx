// import React from "react";
// import { useSelector } from "react-redux";
// import "./BotonActividades.css";

// //Llamamos al archivo api creado con axios

// export default function BotonActividades({ Actividades, FiltradoActividades }) {
//   const a = useSelector((state) => state.Actividades);
//   console.log(a);
//   return (
//     <div>
//       <select
//         className="selectOp"
//         defaultValue={"DEFAULT"}
//         onChange={(e) => FiltradoActividades(e.target.value)}
//       >
//         <option className="selectFop">Sort by activity!</option>
//         {a && a.length &&
//           a.map((item, index) => {
//           return (
//             <option className="selectFop" key={index} value={item.id}>
//               {item.nombre}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }


import React from 'react';
import { useSelector } from "react-redux";
//import './EpisodeButton.css';

export default function EpisodeButton({Episodios, FiltradoEpisodios}) {
    let epName = [];
    const episodes = useSelector((state) => state.Episodes)
    for(let i = 0; i < episodes[1]; i++){
        episodes[0][i].map((e) => {
            epName.push(e)
        })
    }
    return (
        <div>
            <select 
            className="selectEp"
            defaultValue={"Default"}
            onChange={(e) => FiltradoEpisodios(e.target.value)}
            >
                <option className="optionEp">Select episode</option>
                {
                    epName && epName.length !== 0 && 
                    epName.map((item, index) => {
                        return (
                            <option className="optionEp" key={index} value={item.id}>
                                {item.name}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}