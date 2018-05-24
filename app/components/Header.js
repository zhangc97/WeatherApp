var React = require('react');
var MainDisplay = require('./MainDisplay');

class Header extends React.Component {
  render() {
    return (
      <div className = 'navbar'>
        <h1>Main.js Header</h1>
        <div className = 'form-location'>
          <MainDisplay direction = 'row' />
        </div>

      </div>
    )
  }
}

module.exports = Header;
