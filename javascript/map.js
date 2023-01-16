// Leaflet Maps
var map = L.map("map").setView([39.0681573, -94.61], 12.1);
// var streets = L.tileLayer(mapboxUrl, {
//   id: "mapbox/streets-v11",
//   tileSize: 512,
//   zoomOffset: -1,
//   attribution: mapboxAttribution,
// });

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
  // layers: streets,
}).addTo(map);

var markerA = L.marker([39.093748285483606, -94.58140923574857]).addTo(map);
var markerB = L.marker([39.02266205986825, -94.67200014411964]).addTo(map);

markerB.bindPopup("<b>Overland Park</b><br>7420 Johnson Drive</br>");
markerA.bindPopup("<b>Downtown Kansas City</b><br>1624 Grand Boulevard</br>");

// map.addLayer(streets);
