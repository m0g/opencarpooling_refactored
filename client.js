/** @jsx React.DOM */

var Leaflet = require('leaflet');
var React = require('react');
var LiftsApp = require('./components/lifts_app.react');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
React.renderComponent(
  <LiftsApp lifts={initialState}/>,
  document.getElementById('react-app')
);

var initBackgroundMap = function() {
  var map = Leaflet.map('bg-map', {
    zoomControl: false
  }).setView([ 46.088, 2.219 ], 8);

  Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Disable drag and zoom handlers.
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();

  // Disable tap handler, if present.
  if (map.tap) map.tap.disable();
};

initBackgroundMap();
