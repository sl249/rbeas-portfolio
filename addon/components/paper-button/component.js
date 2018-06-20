import layout from './template';
import PaperButtonComponent from 'ember-paper/components/paper-button';

let component = PaperButtonComponent.extend({
  layout,
  classNameBindings: [
    'raised:md-raised',
    'iconButton:md-icon-button',
    'fab:md-fab',
    'mini:md-mini',
    'round:md-round'
  ],
});

export default component;
