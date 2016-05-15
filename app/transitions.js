export default function() {
  this.transition(
    this.fromRoute('list.index'),
    this.toRoute('item.index_loading'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  // this.transition(
  //   this.fromRoute('item.index_loading'),
  //   this.toRoute('item.index'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  //   // this.debug()
  // );
  // this.transition(
  //   this.fromRoute('list.index'),
  //   this.toRoute('list.new'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );
  this.transition(
    // this.debug(),
    // this.hasClass('transition-container'),
    this.fromRoute(['item', 'item.index']),
    this.toRoute(['item.new', 'item.edit']),
    this.use('toLeft')//,
    // this.reverse('toRight')
  );
  this.transition(
    // this.debug(),
    // this.hasClass('transition-container'),
    this.fromRoute(['item.edit']),
    this.toRoute(['item.index_loading']),
    this.use('toRight')
  );
  this.transition(
    // this.debug(),
    // this.hasClass('transition-container'),
    this.fromRoute(['item.index_loading']),
    this.toRoute(['item.index']),
    this.use('toRight')
  );
}
