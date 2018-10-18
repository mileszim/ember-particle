import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import PARTICLE_METHODS from 'ember-particle/utils/particle-methods';

module('Unit | Service | particle', function(hooks) {
  setupTest(hooks);

  test('it responds to the known particle SDK methods', function(assert) {
    let service = this.owner.lookup('service:particle');
    PARTICLE_METHODS.forEach((method) => {
      assert.ok(service.hasOwnProperty(method));
    });
  });

  test('it can check if logged in if token exists', function(assert) {
    let service = this.owner.factoryFor('service:particle').create({ token: '1234' });
    assert.ok(service.loggedIn(), "user is logged in to particle API");

    service.set('token', null);
    assert.notOk(service.loggedIn(), "user is NOT logged into particle API");
  });
});
