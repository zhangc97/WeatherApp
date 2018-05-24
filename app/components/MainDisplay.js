var React = require('react');

class MainDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      zipcode: '01810'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){

  }
  handleSubmit(event){

  }

  render() {
    return(
      <div className = 'submit-container' style={{flexDirection: this.props.direction}}>

          <input
            className = 'form-control'
            id = 'zipcode'
            placeholder = 'Boston, MA'
            type = 'text'
            autoComplete = 'off'
            value = {this.state.zipcode}
            onChange = {this.handleChange} />
            <button
              type='button'
              style={{margin: 10}}
              className='btn'
              onClick={this.handleSubmitZipcode}>
            Get Weather
        </button>
      </div>
    )
  }
}

module.exports = MainDisplay;
