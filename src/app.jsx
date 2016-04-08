var React = require ('react');
var ReactDOM = require ('react-dom');
var Parent = require('./components/Parent.jsx');


var App = React.createClass({
	render : function () {
		return (
			<div><Parent/></div>
			);
	}
});


ReactDOM.render(<App/>, document.getElementById("app"));