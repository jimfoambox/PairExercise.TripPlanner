//console.log("Hello World");\


import mapboxgl from "mapbox-gl";
import markerBuilder from './marker';

mapboxgl.accessToken = 'pk.eyJ1IjoiamltZm9hbWJveCIsImEiOiJja2Z3cGx6bHEwZWV4MnhubzFmOW5wdnNtIn0.FhTM7clMFp8vrUVR0nHGkQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//const fullstackMarker = new mapboxgl.Marker(document.querySelector('#marker1')).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = markerBuilder("activity", [-74.009151, 40.705086]);
marker.addTo(map);