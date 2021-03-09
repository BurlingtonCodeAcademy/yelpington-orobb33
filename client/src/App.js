
import "./components/style/App.css";
import Map from "./components/Map";
import { useState } from "react";
import L, { map } from "leaflet";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import SideBar from "./components/SideBar";
import BarPage from "./components/BarPage";
//imports for everything

//defining use states for maps
function App() {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  const [zoom, setZoom] = useState({
    zoomIn: false,
    zoom: 13,
    center: [44.4759, -73.2121],
  });

  //switch routers, app.js is acting as home component. sidebar is selection of bars, bar page is individual bar info
  /* match query here and setting zoom to zoom into map once bar page is selected */
  return (
    <div>
      <h1 id="header"> Yelpington</h1>
      
      <div id="contentWrapper">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <SideBar setZoom={setZoom} />;
            }}
          > 
            <SideBar/>
           </Route>

          <Route
            path="/bars/:id"
            render={(props) => {
              return props.match.isExact ? (
                <BarPage match={props.match} setNewZoom={setZoom} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        </Switch>
        <Map
          center={center}
          // zoom={zoom}
          newZoom={zoom.zoomIn ? zoom.zoom : 13}
          newCenter={zoom.zoomIn ? zoom.center : [44.4759, -73.2121]}
        />
      </div>
    </div>
  );
}
//setting zoom and center default above
export default App;



