import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  preloader: service('preloader'),

  actions: {
    didTransition() {
      if (!this.get('loaded')) {
        this.get('preloader').addLoadedClass('fade');
        this.get('preloader').removePreloader(250);
        this.set('loaded', true);
      }
    },
    selectRoute(index) {
      this.set('controller.selectedRoute', index);
    }
  }
});
