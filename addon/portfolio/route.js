import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  preloader: service('preloader'),

  actions: {
    didTransition() {
      this.get('preloader').addLoadedClass('fade');
      this.get('preloader').removePreloader(250);
    }
  }
});
