import { reads } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import Ember from 'ember';
import layout from './template';
import ColorMixin from 'ember-paper/mixins/color-mixin';

const {
  String: Str
} = Ember;

let svgIconComponent = Component.extend(ColorMixin, {
  layout,
  tagName: 'md-icon',
  classNames: ['paper-icon', 'md-font', 'material-icons', 'md-default-theme'],
  classNameBindings: ['spinClass'],
  attributeBindings: ['aria-label', 'title', 'sizeStyle:style'],

  icon: '',
  spin: false,
  reverseSpin: false,

  iconClass: computed('icon', 'positionalIcon', function() {
    let icon = this.getWithDefault('positionalIcon', this.get('icon'));
    return icon;
  }),

  'aria-label': reads('iconClass'),

  spinClass: computed('spin', 'reverseSpin', function() {
    if (this.get('spin')) {
      return 'md-spin';
    } else if (this.get('reverseSpin')) {
      return 'md-spin-reverse';
    }
  }),

  svgSize: computed('size', function() {
    let size = this.get('size');

    if (size) {
      return Str.htmlSafe(`${size}px`);
    }
  }),

  sizeStyle: computed('size', function() {
    let size = this.get('size');

    if (size) {
      return Str.htmlSafe(`height: ${size}px; min-height: ${size}px; min-width: ${size}px; font-size: ${size}px; line-height: ${size}px;`);
    }
  })
});

svgIconComponent.reopenClass({
  positionalParams: ['positionalIcon']
});

export default svgIconComponent;
