import React from "react";
import { Link } from "react-router-dom";
import "./Character.css";
//https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Death_skull.svg/1200px-Death_skull.svg.png
//https://c.tenor.com/YF9Ci2-U6ekAAAAC/love-heart.gif
//https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png
export default function Character({ name, status, species, origin, image }) {
  var newImage = ""

var backImg = document.getElementById("back")




  if(status === "unknown"){newImage = "https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png"}
  else if(status === "Alive"){newImage = "https://c.tenor.com/YF9Ci2-U6ekAAAAC/love-heart.gif"}
  else if(status === "Dead"){newImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Death_skull.svg/1200px-Death_skull.svg.png"}

  return (
        <div className="wrap">
        <div className="tarjeta-wrap">
        <div className="tarjeta">
        <div className="adelante">
        <img className="imageCharacter" src={image} alt=""/>
        <p className="frontName"><strong>{name}</strong></p>
        </div>
        <div className="atras">
        <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Origin: {origin}</p>
          <img className="deathImage" src={newImage} alt="" />
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