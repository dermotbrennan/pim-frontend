import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['layout'],
  layout: "cards",
  isCardLayout: Ember.computed("layout", function() {
    return (this.get("layout") === "cards");
  }),
  actions: {
    goToItem(item) {
      this.transitionToRoute('item.edit', item);
    }
  }
});
