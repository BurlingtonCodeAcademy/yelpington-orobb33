import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/App.css";

export default function SideBar(props) {
  const [barNames, setBarNames] = useState([]);
  //use state for list of bars
  useEffect(() => {
    if (barNames.length === 0) {
      fetch(`/api`)
        .then((res) => res.json())
        .then((barList) => {
          setBarNames(barList);
        });
    }
  });
  //list of bars, clickable, link styling disabled. edited to look more presentable (replaceAll
  return (
    <div id="SideBar">
      <h2>Bars of Burly</h2>
      {barNames.map((id, index) => {
        return (
          <h3 key={index}>
            <Link style={{ textDecoration: "none", color: "black" }}
              to={`/bars/${id}`}>
              {id.replaceAll("-", " ")}
            </Link>
          </h3>
        );
      })}
    </div>
  );
}
