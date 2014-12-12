/** @jsx React.DOM */

var React = require('react');

module.exports = Lift = React.createClass({
  render: function(){
    var lift = this.props.lift;
    return (
      <li className={"lift" + (lift.active ? ' active' : '')}>
        <span>{lift.from} {lift.to}</span>
      </li>
    )
  }
});
