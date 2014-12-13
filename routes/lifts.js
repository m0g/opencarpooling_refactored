(function() {
  var Lift = require('./../models/lift');
  var JSX = require('node-jsx').install();
  var React = require('react');
  var LiftsApp = require('./../components/lifts_app.react');

  module.exports = {
    new: function(req, res) {
      res.render('lift_new');
    },

    index: function(req, res) {
      Lift.find(function(err, lifts) {
        console.log(lifts);
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
