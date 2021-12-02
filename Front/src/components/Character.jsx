import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";
//https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Death_skull.svg/1200px-Death_skull.svg.png
//https://c.tenor.com/YF9Ci2-U6ekAAAAC/love-heart.gif
//https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png
export default function Character({ name, status, species, gender, origin, location, image }) {
  var newImage = ""
var backImg = document.getElementById("back")

  // if(status === "unknown"){newImage = "https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png"}
  // else if(status === "Alive"){newImage = "https://c.tenor.com/YF9Ci2-U6ekAAAAC/love-heart.gif"}
  // else if(status === "Dead"){newImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Death_skull.svg/1200px-Death_skull.svg.png"

  var gradientColor = ""
  var fontColor = ""
  if(status === 'Alive'){gradientColor = "linear-gradient(to left, #00C853, #B2FF59)";
   fontColor = "green"}
  if(status === 'unknown'){gradientColor = "linear-gradient(to left, #5f0a87, #a4508b)"; fontColor = "purple"}
  if(status === 'Dead'){gradientColor = "linear-gradient(to left, #333333, #dd1818)"; fontColor = "red"}



  



  return (
        <div className="wrap">
        <div className="tarjeta-wrap">
        <div className="tarjeta">
        <div className="adelante">
        <img className="imageCharacter" src={image} alt=""/>
        <div className="frontTextContainer">
          <p className="frontName"><strong>{name}</strong></p>
          </div>
        </div>
        <div className="atras">
        <p className="pName">Name: {name}</p>
          <p className="pSpecies">Species: {species}</p>
          <p className="pGender">Gender: {gender}</p>
          <p className="pOrigin">Origin: {origin}</p>
          <p className="pLocation">Location: {location}</p>
          <p className="pStatus" style={{"border-image-source":gradientColor, "color":fontColor}}>Status: {status}</p>
          {/* <img className="deathImage" src={newImage} alt="" /> */}
        </div>
        </div>
        </div>
        </div>
  );
}


/*<div className="charCard">
        <img src={image} alt=""/>
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Origin: {origin}</p>
          <img className="deathImage" src={newImage} alt="" />
        </div>*/