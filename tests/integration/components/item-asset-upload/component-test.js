import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-asset-upload', 'Integration | Component | item asset upload', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{item-asset-upload}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#item-asset-upload}}
      template block text
    {{/item-asset-upload}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
