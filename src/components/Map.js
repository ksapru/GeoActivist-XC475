import React,{ useState } from 'react'
import MapGL, {GeolocateControl, Marker,Layer} from 'react-map-gl'
//import config from '../config'
import 'mapbox-gl/dist/mapbox-gl.css'
//import logo from 'mapbox-marker-icon-blue.svg'
//import {geojson} from "marker.js"

const TOKEN='pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';

const geolocateStyle = {
  float: 'left',
  margin: '10px',
  padding: '10px'
};

//const logo = require('mapbox-marker-icon.png');

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
  // const markers = React.useMemo(() => data.map(
  //   city => (
  //     <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} >
  //       <img src="pin.png" />
  //     </Marker>
  //   )
  // ), [props.data]);

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
        {/* <Marker latitude={42.3486} longitude={-71.1029} offsetLeft={-20} offsetTop={-10}> */}
        {/* <div><i class="fa fa-map-marker" aria-hidden="true"></i></div> */}
        {/* <Layer type="symbol" id="marker" layout={{ 'map_marker.png': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer> */}
       {/* <img src={require('mapbox-marker-icon-blue.svg').default}/> */}
        {/* </Marker> */}
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
        <Marker latitude={42.3486} longitude={-71.1029} offsetLeft={-20} offsetTop={-10}>
        {/* <div><i class="fa fa-map-marker" aria-hidden="true"></i></div> */}
        {/* <Layer type="symbol" id="marker" layout={{ 'map_marker.png': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer> */}
       {/* <img src={require('mapbox-marker-icon-blue.svg').default}/> */}
        <img src={require('./Assets/mapbox-marker-icon.png').default}/>
       <div>Marker here</div>
        </Marker>
      {/* <img src={require('./components/mapbox-marker-icon-blue.svg').default}/> */}
       </MapGL>
      </div>
     )
    }

    export default Map