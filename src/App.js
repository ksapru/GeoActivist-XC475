// import logo from './logo.svg'
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

import ReactMapGL, { Marker,Layer, Feature } from 'react-map-gl'

import './components/Dropdown_checkBox.js'
import Example from './components/Dropdown_checkBox';

import './components/MySelect.js'
import MySelect from './components/MySelect.js';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import DropDown_issueType from './components/Dropdown_checkBox.js';

import './components/Map.js'
import Map from './components/Map'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './components/CustomMarker.js'
import CustomMarker from './components/CustomMarker'


import About from './About'
// import './components/CustomMarker'
// import CustomMarker from './components/CustomMarker'
mapboxgl.accessToken = 'pk.eyJ1IjoidHphbGl5YSIsImEiOiJja3VuMncxd3QzeHI3MnZtbmZyOTE0Z2RhIn0.wXgglO-cXtCIq-QJ17Jv-g';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-71.1029);
  const [lat, setLat] = useState(42.3486);
  const [zoom, setZoom] = useState(15.48);

  return (
    <div className="App">

      <Navbar></Navbar>

      <div className="SearchBar">
        <Router>
          <Switch>
          <Route path="/" exact component={Searchbar}></Route>
          <Route path="/About" exact component={About}></Route>
          </Switch>
        </Router>

        <DropDown_typeOfActivism></DropDown_typeOfActivism>
        <DropDown_issueType></DropDown_issueType> 
        {/* <Dropdown_checkBox></Dropdown_checkBox> */}
        <SliderPage></SliderPage>
        {/* <img src={require('./components/mapbox-marker-icon-blue.svg').default}/> */}
        {/* <Example></Example> */}
      </div>
      <div className="Map">
      <Map></Map>
      <Searchbar ></Searchbar>
      {/* <CustomMarker></CustomMarker> */}
      </div>
    </div>

  );
}
export default App;
