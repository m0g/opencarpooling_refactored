var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  query: String,
  results: {}
});

module.exports = CityCache = mongoose.model('CityCache', schema);
