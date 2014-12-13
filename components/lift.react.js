/** @jsx React.DOM */

var React = require('react');

module.exports = Lift = React.createClass({
  render: function(){
    var lift = this.props.lift;
    return (
      <div className={"lift" + (lift.active ? ' active' : '')}>
        <div className="lift-content">
          <h3><a href="/">{lift.from} to {lift.to}</a></h3>
          <p>{lift.date} <b>{lift.price}</b></p>
        </div>
      </div>
    )
  }
});
