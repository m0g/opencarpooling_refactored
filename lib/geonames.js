var http = require('http');
var CityCache = require('./../models/city_cache');

var options = {
  host: 'ws.geonames.org',
  path: '/searchJSON?featureClass=P&style=full&country=fr&lang=fr&maxRows=12'
      + '&username=metacarpooling&name_startsWith=',
};

Geonames = function() {};

Geonames.prototype.getCity = function(query, callback) {
  var processData = function(err, cityCache) {
    console.log(cityCache);

    var geoname = cityCache.results.geonames[0];

    if (cityCache.results.geonames.length > 0)
      callback({ value: geoname.asciiName,
               loc: [ parseFloat(geoname.lng), parseFloat(geoname.lat) ] });
    else return callback(false);
  };

  var proceedQuery = function(options) {
    http.request(options, function(response) {
      var str = '';

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        var data = JSON.parse(str);
        var cityCache = new CityCache({ query: query, results: data });
        cityCache.save(processData);
      });
    }).end();
  };

  options.path += query;

  CityCache.findOne({ query: query }, function(err, cityCache) {
    if (cityCache) processData(null, cityCache);
    else proceedQuery(options);
  });
};

//Geonames.prototype.getCities = function(query) {
//  this.options.params.name_startsWith = query;

//  var res = HTTP.get("http://ws.geonames.org/searchJSON", this.options);

//  return res.data.geonames.map(function(geoname) {
//    return { value: geoname.asciiName, lat: geoname.lng, lng: geoname.lat };
//  });
//};

//callback = function(response) {
//  var str = '';

//  //another chunk of data has been recieved, so append it to `str`
//  response.on('data', function (chunk) {
//    str += chunk;
//  });

//  //the whole response has been recieved, so we just print it out here
//  response.on('end', function () {
//    console.log(str);
//  });
//}

//http.request(options, callback).end();
module.exports = Geonames;
