import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  everydayItems: A(['Docker', 'Figma', 'Ember', 'SASS', 'JavaScript', 'npm', 'HTML']),
  selectedPanel: 0
});
