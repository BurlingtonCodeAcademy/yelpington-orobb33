import {useMap} from 'react-leaflet';


function MyComponent({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  

  export default MyComponent;