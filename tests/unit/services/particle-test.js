import { moduleFor, test } from 'ember-qunit';
import ParticleMock from '../../helpers/particle-mock';

moduleFor('service:particle', 'Unit | Service | particle', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});


// Initialize ParticleMock
const particle = new ParticleMock();

// Login tests
test('it fails if username or password missing or empty', function(assert) {
  let service = this.subject();
  assert.false(service.login(''));
});

test('it succeeds because bob took us to victory', function(assert) {
  let service = this.subject();
  assert.false(service.login('bob@particle.io', 'asdf1234'));
})
