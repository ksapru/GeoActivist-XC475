import React, { useRef, useEffect, useState, Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './App.css';
import './components/Navbar.js';
import './components/Map.css';
import Navbar from './components/Navbar'
import maptest from './assets/maptest.jpeg'
 

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      
    </div>
  );
}

// export default App;

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCfHoJqKmYyLukVh7qMwz_bRGE5olKcHG4'
})(MapContainer);

//google dev console
