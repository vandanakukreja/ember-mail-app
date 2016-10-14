import Ember from 'ember';


export default Ember.Service.extend({

getWeatherData(element) {
  let temp;
/*var Forecast = require('ember-forecast-io/services/forecast');

var options = {
  APIKey: 'c4d3ca1ae5d74af31b394ed43bb8b565',
  timeout: 1000
}
let latitude = '12.97';
let longitude = '77.59';
forecast = new forecast(latitude, longitude);*/


    var apiKey = 'c4d3ca1ae5d74af31b394ed43bb8b565';
    var url = 'https://api.forecast.io/forecast/';
    var lati = '12.97';
    var longi = '77.59';
    var data;
    // promise api here
    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
            console.log(Math.round((((data.currently.temperature - 32) * 5)/9)*10)/10);
            temp = Math.round((((data.currently.temperature - 32) * 5)/9)*10)/10;
            //  $('#weather').html('and the temperature is: ' + CelsiusTemp);
            element.html(Math.round((((data.currently.temperature - 32) * 5)/9)*10)/10);
    });
    return temp;
}


});
