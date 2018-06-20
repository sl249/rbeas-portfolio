import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import PortfolioRouter from 'rbeas-portfolio/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  PortfolioRouter.call(this, this);
});

export default Router;
