var React = require('react');
var Forecast = require('./Forecast');

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather : []
    }
    function convertToCelsius(kelvin) {
      return (kelvin-273.15)
    }
  }
  render() {
    console.log(this.props);
    return(
      <div>Hello I am called</div>
    )
  }
}

module.exports = Detail;
