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

import './components/Dropdown_issueType.js'
import DropDown_issueType from './components/Dropdown_issueType';

import ReactMapGL from 'react-map-gl'
 
 

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';
// eslint-disable-next-line no-undef
// When active the map will receive updates to the device's location as it changes.
   
// import { useState } from 'react';


function App() {
  // const [viewport,setViewPort] = useState({
  //   latitude: 0.000,
  //   longtitude: 0.000,
  //   width: '100vw',
  //   height: '100vh',
  //   zoom:10

  // })

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.1029);
  const [lat, setLat] = useState(42.3486);
  const [zoom, setZoom] = useState(15.48);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom,
    trackUserLocation: true,
    });
    });  

    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
      });

  return (
    <div className="App">

      <Navbar></Navbar>

      <div className="SearchBar">
        <Searchbar ></Searchbar>
        <DropDown_typeOfActivism/>
        <DropDown_issueType/>
        <SliderPage/>
 
      </div>

      {/* <div className="Map">
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN } 
        onViewportChange = { (viewport) => {
          setViewPort(viewport);
          }}
        mapStyle="mapbox://styles/tzaliya/ckun43plxaorq19nyp63vqsxu" 
        >
          markers here
        </ReactMapGL>

        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>

      </div> */}
      <div className="Map">

      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />

      </div>
      

    </div>
  );
}

export default App;
