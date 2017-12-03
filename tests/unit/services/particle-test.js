import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import ParticleMock from '../../helpers/particle-mock';

moduleFor('service:particle', 'Unit | Service | particle', {
  unit: true
});

let particle = new ParticleMock();

// Login tests
test('it fails if username or password missing or empty', function(assert) {
  let service = this.subject();
  let spy = this.spy(service);
  let mock = this.mock(particle);
  mock.expects('login').once().throws();
  service.login('');
  mock.verify();
  assert(spy.calledOnce);
});

test('it succeeds because bob took us to victory', function(assert) {
  let service = this.subject();
  let stub = this.stub(service, 'login');
  service.login('bob@particle.io', 'asdf1234');
  assert.ok(stub.calledOnce);
});
