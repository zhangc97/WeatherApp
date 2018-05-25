var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Loading = require('./Loading');


class Forecast extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      information: []
    }
  }

  componentWillMount(){
    this.zipcode = queryString.parse(this.props.location.search);
    this.makeRequest(this.zipcode.zip);
  }
  componentWillReceiveProps(nextProps) {
    this.zipcode = queryString.parse(nextProps.location.search).zip;
    this.makeRequest(this.zipcode);
  }

  makeRequest(zipcode){
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getWeather(zipcode).then(function(res) {
      this.setState(function() {
        return {
          loading: false,
          information: res
        }
      })
    }.bind(this))

  }


  render() {
    function convertToCelsius(kelvin) {
      return (Math.round(kelvin-273.15))
    }
    return (this.state.loading === true
      ? <div className = 'main-container' style = {{backgroundImage: "url('../pattern.svg')"}}>
        <Loading />
        </div>
      : <div className = 'main-container' style = {{backgroundImage: "url('../pattern.svg')"}}>
        <img className='weather' src={'../' + this.state.information.weather[0].icon + '.svg'} alt='Weather' />
        <p>Current Temperature: {convertToCelsius(this.state.information.main.temp)}°C</p>
        <p>High Temperature of: {convertToCelsius(this.state.information.main.temp_max)}°C</p>
        <p>Low Temperature of: {convertToCelsius(this.state.information.main.temp_min)}°C</p>
      </div>
    )
  }
}

module.exports = Forecast;
