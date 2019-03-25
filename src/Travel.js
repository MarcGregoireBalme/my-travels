import React from "react";

const Travel = ({ dest, count, pho, dist }) => (
  <div>
   <h1>destination: {dest}</h1>
    <h2>country : {count}</h2>
    <h3>photo : <img src={pho}/></h3>
    <h4>distance : {dist}</h4>
  </div>

);

export default Travel;
