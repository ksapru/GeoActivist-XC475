import React,{ useState } from 'react'
import MapGL, {GeolocateControl, Marker } from 'react-map-gl'
//import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css'
//import {geojson} from "marker.js"

const TOKEN='pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';

const geolocateStyle = {
  float: 'left',
  margin: '10px',
  padding: '10px'
};

// const geojson = {
//     type: 'FeatureCollection',
//     features: [
//       {
//         type: 'Feature',
//         geometry: {
//           type: 'Point',
//           lng: -71.1029,
//           ltd: 42.3486
//         },
//         properties: {
//           title: 'Mapbox',
//           description: 'Washington, D.C.'
//         }
//       },
//       {
//         type: 'Feature',
//         geometry: {
//           type: 'Point',
//           lng: -71.1029,
//           ltd: 37.776
//         },
//         properties: {
//           title: 'Mapbox',
//           description: 'San Francisco, California'
//         }
//       }
//     ]
//   };

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 42.3486,
    longitude: -71.1029,
    zoom: 15
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 10 })

  return (
    <div style={{ margin: '0 0'}}>
        {/* <div className="sidebar">
        Longitude: {viewport.longitude} | Latitude: {viewport.latitude} | Zoom: {viewport.zoom}
        </div> */}
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
       >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
         />
         {/* <Marker
            longitude={geojson.features.geometry.lng}
            latitude={geojson.features.geometry.ltd}>
            <div className="marker temporary-marker"><span></span></div>
        </Marker> */}
       </MapGL>
      </div>
     )
    }

    export default Map