//write all code in here, one fetch in here to source individual json

import React from "react";
import { useState, useEffect } from "react";

//loading bar page in
//pass props in component
//use match property - props.match.name

export default function BarPage(props) {
  const [theBar, setTheBar] = useState({
    id: "",
    name: "",
    address: "",
    phonenumber: "",
    hours: "",
    favoritedrink: "",
    lat: "",
    long: ""
  });
//fetching bar info, passing thru zoom props and changing it to the lat and long from selected page
  useEffect(() => {
    if (theBar.id === "") {
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((barInfo) => {
          setTheBar(barInfo);
         console.log (props.match) 
         props.setNewZoom({
            zoomIn: true,
            zoom: 20,
            center: [barInfo.lat, barInfo.long],
        });
        });
    }
  });
  
//returning all info from specific bar json
  return (
    <div id="barInfo">
      <h2>{theBar.name}</h2>
      <h3>{theBar.phonenumber}</h3>
      <h3>{theBar.hours}</h3>
      <h3>{theBar.address}</h3>
      <h3>Best Drink: {theBar.favoritedrink}</h3>
    </div>
  );
}
