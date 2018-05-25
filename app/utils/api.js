var axios = require('axios');

var _baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
var _APIKey = '14ce8f96c8e7174a23d9b3430acb8c7a';

function getWeather(zipcode){
  //console.log(_baseURL + zipcode + ",us&APPID=" + _APIKey);
  return axios.get(_baseURL + zipcode + ",us&APPID=" + _APIKey).then(function(weather) {
    return weather.data;
  });
}

module.exports = {
  getWeather: getWeather
};
