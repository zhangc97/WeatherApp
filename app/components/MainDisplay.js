var React = require('react');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;

class MainDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      zipcode: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    var zip = e.target.value;
    this.setState(function () {
      return {
        zipcode: zip
      }
    });

  }
  handleSubmit(zipcode){
    api.getWeather(zipcode).then(function(event){
      console.log(event)
    })

  }

  render() {
    return(

      <div className = 'submit-container' style={{flexDirection: this.props.direction}}>
          <input
            className = 'form-control'
            id = 'zipcode'
            placeholder = '01810'
            type = 'text'
            autoComplete = 'off'
            value = {this.state.zipcode}
            onChange = {this.handleChange} />
            <Link
              className = 'button'
              to = {{
                pathname: '/forecast/detail',
                search: '?zip=' + this.state.zipcode
              }}>
              Get Weather
            </Link>
      </div>
    )
  }
}

module.exports = MainDisplay;
