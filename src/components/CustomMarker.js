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
//     ]};

import React from 'react';
import { Marker } from 'react-map-gl';
import 'marker.js'
import MarkerSVG from 'marker';

function CustomMarker(props) {
    const { latitude, longitude, offsetLeft, offsetTop, text, description, color } = props;
    return (
        <Marker latitude={latitude} longitude={longitude} offsetLeft={offsetLeft} offsetTop={offsetTop}>
            <div style={{ color, cursor: 'pointer' }} onClick={() => alert(`${description}: ${latitude}, ${longitude}`)}>
                <MarkerSVG /><span>{text}</span>
            </div>
        </Marker>
    );
}

export default CustomMarker;
  