import { moduleFor, test } from 'ember-qunit';
import PARTICLE_METHODS from 'ember-particle/utils/particle-methods';

moduleFor('service:particle', 'Unit | Service | particle', {
});

test('it responds to the known particle SDK methods', function(assert) {
  let service = this.subject();
  PARTICLE_METHODS.forEach((method) => {
    assert.ok(service.hasOwnProperty(method));
  });
});
