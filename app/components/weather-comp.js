import Ember from 'ember';


export default Ember.Component.extend({
  weather: Ember.inject.service('weather'),

didInsertElement(){
  /*custom method cal on it*/
  this.get('weather').getWeatherData($('.weather-comp-container'));
}
});
