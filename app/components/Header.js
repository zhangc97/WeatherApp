var React = require('react');
var MainDisplay = require('./MainDisplay');

class Header extends React.Component {
  render() {
    return (
      <div className = 'navbar'>
        <h1>Basic Current Weather App</h1>
        <div className = 'form-location'>
          <MainDisplay direction = 'row' />
        </div>

      </div>
    )
  }
}

module.exports = Header;
