import Component from '@ember/component';
import layout from './template';
import { A } from '@ember/array';
import { computed } from '@ember/object';
// in seconds
const SLIDESHOW_TIME = 6;

export default Component.extend({
  layout,
  timer: 100,
  selectedProjectObject: computed('selectedProject', function () {
    return this.get('projects').objectAt(this.get('selectedProject'));
  }),
  init() {
    this._super(...arguments);
    this.set('selectedProject', 0);

    this.set('interval', setInterval(() => {
      if (!this.get('expandedProject')) {
        if (this.get('timer')) {
          this.set('timer', this.get('timer') - 1);
        } else {
          if (this.get('selectedProject') === this.get('projects.length') - 1) {
            this.set('selectedProject', 0);
          } else {
            this.set('selectedProject', this.get('selectedProject') + 1);
          }
          this.set('timer', 100);
        }
      }
    }, SLIDESHOW_TIME * 10));
  },
  willDestroyElement() {
    this._super(...arguments);
    clearInterval(this.get('interval'));
  },
  projects: A([
    {
      title: 'Docker & Kuberneters Status Deployment Dashboard',
      description: 'Figma Design and Ember Beta implementation for analytics dasboard in Trove Platform',
      image: 'dashboard.png'
    },
    {
      title: 'Geospatial Metadata Filtering and Viewing Tool',
      description: 'Ember implementation of metadata viewing and filtering tool using Google Maps and marker clustering to handle 60,000+ markers',
      image: 'dashboard-map.png'
    },
    {
      title: 'Trove Data Catalog Browser Utility',
      description: 'Figma Design and Ember Beta implementation for analytics dasboard in Trove Platform',
      image: 'catalog.png'
    },
    {
      title: 'Telenotes Mapping Utility',
      description: 'Figma Design and Ember Beta implementation for analytics dasboard in Trove Platform',
      image: 'dashboard.png'
    }
  ]),
  actions: {
    expand(project) {
      this.set('expandedProject', project);
    },
    next() {
      if (this.get('selectedProject') === this.get('projects.length') - 1) {
        this.set('selectedProject', 0);
      } else {
        this.set('selectedProject', this.get('selectedProject') + 1);
      }

      this.set('timer', 100);
    },
    previous() {
      if (!this.get('selectedProject')) {
        this.set('selectedProject', this.get('projects.length') - 1);
      } else {
        this.set('selectedProject', this.get('selectedProject') - 1);
      }
      this.set('timer', 100);
    }
  }
});
