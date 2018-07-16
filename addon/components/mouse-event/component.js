import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  mouseEnter() {
    this.get('onMouseEnter')();
  },
  mouseLeave() {
    this.get('onMouseLeave')();
  }
});
