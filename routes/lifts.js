(function() {
  var Lift = require('./../models/lift');
  var JSX = require('node-jsx').install();
  var React = require('react');
  var LiftsApp = require('./../components/lifts_app.react');
  var LiftNew = require('./../components/lift_new.react');

  module.exports = {
    new: function(req, res) {
      //res.render('lift_new');
      // Render React to a string, passing in our fetched tweets
      var markup = React.renderComponentToString(
        LiftNew({})
      );

      res.render('lift_new', {
        markup: markup, // Pass rendered react markup
        state: JSON.stringify({}) // Pass current state to client side
      });
 
    },

    index: function(req, res) {
      Lift.find(function(err, lifts) {
        // Render React to a string, passing in our fetched tweets
        var markup = React.renderComponentToString(
          LiftsApp({
            lifts: lifts
          })
        );

        res.render('index', {
          markup: markup, // Pass rendered react markup
          state: JSON.stringify(lifts) // Pass current state to client side
        });
      });
    },

    populate: function(req, res) {
      Lift.find().remove(function() {
        var lift = new Lift({ from: 'Annecy', to: 'Marseille',
                              date: Date.now, price: '12eur' });

        lift.save(function(err, newLift) {
          res.json(newLift);
        });
      });
    }
  }
})();
