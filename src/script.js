var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [78.96, 20.56], 
    zoom: 5,
});


map.addControl(new mapboxgl.NavigationControl());


map.addControl(new mapboxgl.GeolocateControl({
    positionOption: {
        enableHeightAccuracy: true
    },
    trackUserLocation: true
}));