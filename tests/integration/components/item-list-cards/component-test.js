import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-list-cards', 'Integration | Component | item list cards', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{item-list-cards}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#item-list-cards}}
      template block text
    {{/item-list-cards}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
