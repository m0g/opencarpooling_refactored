/** @jsx React.DOM */

var React = require('react');
var Lift = require('./lift.react.js');

module.exports = Lifts = React.createClass({
  // Render our tweets
  render: function(){
    // Build list items of single tweet components using map
    var content = this.props.lifts.map(function(lift){
      return (
        <Lift key={lift._id} lift={lift} />
      )
    });
    // Return ul filled with our mapped tweets
    return (
      <ul className="lifts">{content}</ul>
    )
  }
}); 
