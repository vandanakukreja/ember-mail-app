import Ember from 'ember';
import App from '../app';

export default Ember.Route.extend({
  model: function(params) {
   return this.modelFor('mailbox').messages.findBy('id', params.message_id);
 }
});
