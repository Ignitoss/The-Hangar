// Leaflet Maps
var map = L.map("map").setView([38.6292865, -90.1987584], 14.5);
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
var markerC = L.marker([38.629458318133565, -90.198812044176]).addTo(map);
var markerD = L.marker([30.275221906707042, -97.74371615401466]).addTo(map);

markerB.bindPopup("<b>Overland Park</b><br>7420 Johnson Drive</br>");
markerA.bindPopup("<b>Downtown Kansas City</b><br>1624 Grand Boulevard</br>");
markerC.bindPopup("<b>Downtown St. Louis</b><br>1223 Pine Street</br>");
markerD.bindPopup("<b>Downtown Austin</b><br>316 W 12th Street</br>");

// map.addLayer(streets);
