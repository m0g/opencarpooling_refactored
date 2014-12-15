/** @jsx React.DOM */

var React = require('react');

module.exports = LiftNew = React.createClass({
  // Set the initial component state
  getInitialState: function(props){
    props = props || this.props;
    // Set initial application state using props
    return {
      fromLat: 0,
      fromLng: 0,
      toLat: 0,
      toLng: 0
    };
  },
  // Render the component
  render: function(){

    return (
      <form className="main form lift col-md-4">
        <h1>Offer a lift</h1>

        <div className="input-group">
          <input className="form-control input-lg" name="from" type="text"
             placeholder="From" id="from"
             autocomplete="off" spellcheck="off"
             data-source="geocode"/>

          <input type="hidden" id="from-lat" value={this.props.fromLat} name="from-lat" />
          <input type="hidden" id="from-lng" value={this.props.fromLng} name="from-lng" />

          <span className="input-group-addon">
            <i className="fa fa-map-marker"></i>
          </span>
        </div>

        <div className="input-group">
          <input name="to" id="to" type="text" value=""
                 placeholder="To" className="form-control input-lg"/>

          <input type="hidden" id="to-lat" value={this.props.toLat} name="to-lat" />
          <input type="hidden" id="to-lng" value={this.props.toLng} name="to-lng" />

          <span className="input-group-addon">
            <i className="fa fa-map-marker"></i>
          </span>
        </div>

        <div className="input-group">
          <input name="date" id="date" type="text" value=""
                 placeholder="Date" className="form-control input-lg"/>

          <span className="input-group-addon">
            <i className="fa fa-calendar"></i>
          </span>
        </div>

        <div className="input-group">
          <input name="price" id="price" type="text" value=""
                 placeholder="Price" className="form-control input-lg"/>
          <span className="input-group-addon">€</span>
        </div>

        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
});
