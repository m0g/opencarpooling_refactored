/** @jsx React.DOM */

var React = require('react');
var Lifts = require('./../components/lifts.react.js');

module.exports = LiftsApp = React.createClass({
  // Set the initial component state
  getInitialState: function(props){
    props = props || this.props;
    // Set initial application state using props
    return {
      lifts: props.lifts,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  },
  // Render the component
  render: function(){

    return (
      <div className="container">
        <h3>Latest lifts</h3>
        <div className="lifts-app lifts">
          <Lifts lifts={this.state.lifts} />
        </div>
      </div>
    )

  }
});
