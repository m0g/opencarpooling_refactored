// Require our dependencies
var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  mongoose = require('mongoose');
  lifts = require('./routes/lifts');
  //config = require('./config');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
mongoose.connect('mongodb://localhost/opencarpooling');

// Create a new ntwitter instance
//var twit = new twitter(config.twitter);

// Index Route
app.get('/', lifts.index);
app.get('/lifts/new', lifts.new);
app.get('/populate', lifts.populate);

// Page Route
//app.get('/page/:page/:skip', routes.page);

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Fire it up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
//var io = require('socket.io').listen(server);

//// Set a stream listener for tweets matching tracking keywords
//twit.stream('statuses/filter',{ track: 'scotch_io, #scotchio'}, function(stream){
//  streamHandler(stream,io);
//});
