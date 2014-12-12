var mongoose = require('mongoose');
var Geonames = require('./../lib/geonames');

var schema = new mongoose.Schema({
  from: String,
  to: String,
  date: String,
  price: String,
  fromLoc: Array,
  toLoc: Array,
  submitted: Date
});

schema.pre('save', function(next){
  var geonames = new Geonames();
  var self = this;

  geonames.getCity(self.from, function(results) {
    self.fromLoc = results.loc;
    self.from = results.value

    geonames.getCity(self.to, function(results) {
      self.toLoc = results.loc;
      self.to = results.value

      next();
    });
  });
});

// Return a Tweet model based upon the defined schema
module.exports = Lift = mongoose.model('Lift', schema);
