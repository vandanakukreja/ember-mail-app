import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weather-comp', 'Integration | Component | weather comp', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{weather-comp}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#weather-comp}}
      template block text
    {{/weather-comp}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
