import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

App.DateHelper = Ember.Helper.helper(function(date) {
  return moment(date[0]).format('MMM Do');
});

App.Mailbox = Ember.Object.extend();
App.Mailbox.reopenClass({
  find: function(id) {
    if (id) {
      return App.FIXTURES.findBy('id', id);
    } else {
      return App.FIXTURES;
    }
  }
});
App.ApplicationRoute = Em.Route.extend({
  model: function() {
    return App.Mailbox.find();
  }
});


export default App;
