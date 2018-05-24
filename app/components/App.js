var React = require('react');
var Header = require('./Header');
var MainDisplay = require('./MainDisplay');

class App extends React.Component {
  render() {
    return (
      <div className = 'container'>
          <div><Header /></div>
          <div className = 'main-container' style = {{backgroundImage: "url('../app/images/pattern.svg')"}}>
          <h1 className = 'header'>Enter a City and State</h1>
            <MainDisplay />
          </div>
      </div>
    )
  }
}
module.exports = App;
