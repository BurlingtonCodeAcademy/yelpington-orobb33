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
// import MyComponent from './MyComponent'

export default function Map(props) {
  const [center, setCenter] = useState([44.4759, -73.2121]);


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

        <Marker position={[44.48598, -73.20995]}>
          <Popup>
            <Link to={`/bars/taco-gordo`}>Taco Gordo</Link>
          </Popup>
        </Marker>

        <Marker position={[44.47719192504883, -73.21509552001953]}>
          <Popup>
            <Link to={`/bars/deli-126`}>Deli 126</Link>
          </Popup>
        </Marker>

        <Marker position={[44.4780302, -73.2120044]}>
          <Popup>
            <Link to={`/bars/el-cortijo`}>El Cortijo</Link>
          </Popup>
        </Marker>

        <Marker position={[44.476131, -73.206039]}>
          <Popup>
            <Link to={`/bars/honey-road`}>Honey Road</Link>
          </Popup>
        </Marker>

        <Marker position={[44.47576141357422, -73.212646484375]}>
          <Popup>
            <Link to={`/bars/manhattans`}>Manhattan's</Link>
          </Popup>
        </Marker>

        <Marker position={[44.476688385009766, -73.2142562866211]}>
          <Popup>
            <Link to={`/bars/monarch`}>Monarch </Link>
          </Popup>
        </Marker>

        <Marker position={[44.48067, 73.21108]}>
          <Popup>
            <Link to={`/bars/op`}>The OP</Link>
          </Popup>
        </Marker>

        <Marker position={[44.47522, -73.21363]}>
          <Popup>
            <Link to={`/bars/pizzeria-verita`}>Pizzeria Verita</Link>
          </Popup>
        </Marker>

        <Marker position={[44.48086, -73.21109]}>
          <Popup>
            <Link to={`/bars/radio-bean`}>Radio Bean</Link>
          </Popup>
        </Marker>

        <Marker position={[44.48034, -73.21171]}>
          <Popup>
            <Link to={`/bars/three-needs`}> </Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
