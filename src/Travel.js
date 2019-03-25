import React from "react";
import travels from "./Travels";
import Travels from "./Travels";

const Travel = ({ destination, country, photo, distance }) => (
  <div>
   <h1>destination: {destination}</h1>
    <h2>country : {country}</h2>
    <h3>photo : <img src={photo}/></h3>
    <h4>distance : {distance}</h4>
  </div>

);

export default Travel;
