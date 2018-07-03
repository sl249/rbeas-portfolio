import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | portfolio/blog', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:portfolio/blog');
    assert.ok(route);
  });
});
