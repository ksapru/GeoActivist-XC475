// import logo from './logo.svg';
import './App.css';

import './components/Searchbar.js'
import Searchbar from './components/Searchbar';

import './components/Navbar.js'
import Navbar from './components/Navbar';

import React, {Component, useState,useRef,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";

import './components/Slider.js'
import SliderPage from './components/Slider'

import './components/Dropdown_typeOfActivism.js'
import DropDown_typeOfActivism from './components/Dropdown_typeOfActivism';

import ReactMapGL, { Marker } from 'react-map-gl'

import './components/Dropdown_checkBox.js'
import Example from './components/Dropdown_checkBox';

import './components/MySelect.js'
import MySelect from './components/MySelect.js';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import DropDown_issueType from './components/Dropdown_checkBox.js';

import './components/Map.js'
import Map from './components/Map'

// import './components/CustomMarker'
// import CustomMarker from './components/CustomMarker'
mapboxgl.accessToken = 'pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';


function App() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.1029);
  const [lat, setLat] = useState(42.3486);
  const [zoom, setZoom] = useState(15.48);


  // const TOKEN='pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';

  // const geolocateStyle = {
  //   float: 'left',
  //   margin: '50px',
  //   padding: '10px'
  // };

  // const Map = () => {

  // const [viewport, setViewPort ] = useState({
  //   width: "100%",
  //   height: 900,
  //   latitude: 0,
  //   longitude: 0,
  //   zoom: 2
  // })

  // const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //   container: mapContainer.current,
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [lng, lat],
  //   zoom: zoom
  //   });
  //   });

    // useEffect(() => {
    //   if (!map.current) return; // wait for map to initialize
    //   map.current.on('move', () => {
    //   setLng(map.current.getCenter().lng.toFixed(4));
    //   setLat(map.current.getCenter().lat.toFixed(4));
    //   setZoom(map.current.getZoom().toFixed(2));
    //   });
    //   });
  
  // geojson.features.map((features) =>
  //     new mapboxgl.Marker().setLngLat(features.geometry.coordinates).addTo(map)
  // );
  // addControl(
  //   new mapboxgl.GeolocateControl({
  //   positionOptions: {
  //   enableHighAccuracy: true
  //   },
  //   // When active the map will receive updates to the device's location as it changes.
  //   trackUserLocation: true,
  //   // Draw an arrow next to the location dot to indicate which direction the device is heading.
  //   showUserHeading: true
  //   })
  //   );

  return (
    <div className="App">

      <Navbar></Navbar>

      <div className="SearchBar">
        <Searchbar ></Searchbar>
        <DropDown_typeOfActivism></DropDown_typeOfActivism>
        <DropDown_issueType></DropDown_issueType>
        {/* <Dropdown_checkBox></Dropdown_checkBox> */}
        <SliderPage></SliderPage>
        {/* <Example></Example> */}
      </div>
      <div className="Map">
      {/* <div ref={mapContainer} className="map-container" /> */}
      <Map></Map>
      {/* <CustomMarker></CustomMarker> */}
      </div>
      

    </div>
  );
}
export default App;
