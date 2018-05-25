var React = require('react');
var Header = require('./Header');
var MainDisplay = require('./MainDisplay');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Forecast = require('./Forecast');
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className = 'container'>
            <div><Header /></div>
            <Route exact path='/' render={function(props) {
              return (
                <div className = 'main-container' style = {{backgroundImage: "url('../app/images/pattern.svg')"}}>
                  <h1 className = 'header'>Enter a City and State</h1>
                  <MainDisplay direction = 'column' />
                </div>
              )}
            } />
            <Route path = '/forecast' component = {Forecast} />
        </div>
      </Router>
    )
  }
}
module.exports = App;
