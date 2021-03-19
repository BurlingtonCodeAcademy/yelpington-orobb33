import React from "react";
import L, { map } from "leaflet";
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style/App.css";
import { Link } from "react-router-dom";
import MyComponent from "./MyComponent";
// my component is sibling component to allow zoom
import glass from "../img/kisspng-wine-glass-martini-cocktail-cosmopolitan-margarita-cocktail-glass-vector-5b224f94e603c1.3837636015289752529422.png";

//changing the icon on the map
let glassIcon = L.icon({
  iconUrl: glass,
  iconSize: [38, 50],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

export default function Map(props) {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  //use state for default center
  //map settings
  return (
    <div id="Map">
      <MapContainer
        center={props.center}
        zoom={13}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        zoomControl={true}
        touchZoom={true}
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        />

        <MyComponent center={props.newCenter} zoom={props.newZoom} />

        <Marker position={[44.48598, -73.20995]} icon={glassIcon}>
          <Popup>
            <Link to={`/bars/taco-gordo`}>Taco Gordo</Link>
          </Popup>
        </Marker>

        <Marker
          position={[44.47719192504883, -73.21509552001953]}
          icon={glassIcon}
        >
          <Popup>
            <Link to={`/bars/deli-126`}>Deli 126</Link>
          </Popup>
        </Marker>

        <Marker position={[44.4780302, -73.2120044]} icon={glassIcon}>
          <Popup>
            <Link to={`/bars/el-cortijo`}>El Cortijo</Link>
          </Popup>
        </Marker>

        <Marker position={[44.476131, -73.206039]} icon={glassIcon}>
          <Popup>
            <Link to={`/bars/honey-road`}>Honey Road</Link>
          </Popup>
        </Marker>

        <Marker
          position={[44.47576141357422, -73.212646484375]}
          icon={glassIcon}
        >
          <Popup>
            <Link to={`/bars/manhattans`}>Manhattan's</Link>
          </Popup>
        </Marker>

        <Marker
          position={[44.476688385009766, -73.2142562866211]}
          icon={glassIcon}
        >
          <Popup>
            <Link to={`/bars/monarch`}>Monarch </Link>
          </Popup>
        </Marker>

        <Marker position={[44.48067, 73.21108]} icon={glassIcon}>
          <Popup>
            <Link to={`/bars/op`}>The OP</Link>
          </Popup>
        </Marker>

        <Marker position={[44.47522, -73.21363]} icon={glassIcon}>
          <Popup>
            <Link to={`/bars/pizzeria-verita`}>Pizzeria Verita</Link>
          </Popup>
        </Marker>

        <Marker position={[44.48086, -73.21109]} icon={glassIcon}>
          <Popup>
            <Link to={`/bars/radio-bean`}>Radio Bean</Link>
          </Popup>
        </Marker>

        <Marker position={[44.48034, -73.21171]} icon={glassIcon}>
          <Popup>
            <Link to={`/bars/three-needs`}>Three Needs</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
//my component is sibling allowing for zoom change
//markers and popups allow the map markers with the links to their page. so you can click to the left on the name, or to the right on the marker link.
