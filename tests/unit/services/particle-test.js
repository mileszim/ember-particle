import { moduleFor, skip } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import ParticleMock from '../../helpers/particle-mock';

const METHODS = [
  'login',
  'loginAsClientOwner',
  'createUser',
  'verifyUser',
  'resetPassword',
  'deleteAccessToken',
  'deleteCurrentAccessToken',
  'listAccessTokens',
  'trackingIdentity',
  'listDevices',
  'getDevice',
  'claimDevice',
  'addDeviceToProduct',
  'removeDevice',
  'removeDeviceOwner',
  'renameDevice',
  'signalDevice',
  'setDeviceNotes',
  'markAsDevelopmentDevice',
  'lockDeviceProductFirmware',
  'unlockDeviceProductFirmware',
  'updateDevice',
  'provisionDevice',
  'getClaimCode',
  'getVariable',
  'flashDevice',
  'flashTinker',
  'compileCode',
  'downloadFirmwareBinary',
  'sendPublicKey',
  'callFunction',
  'getEventStream',
  'publishEvent',
  'createWebhook',
  'deleteWebhook',
  'listWebhooks',
  'createIntegration',
  'editIntegration',
  'deleteIntegration',
  'listIntegrations',
  'getUserInfo',
  'setUserInfo',
  'listSIMs',
  'getSIMDataUsage',
  'getFleetDataUsage',
  'activateSIM',
  'deactivateSIM',
  'reactivateSIM',
  'updateSIM',
  'removeSIM',
  'listBuildTargets',
  'listLibraries',
  'getLibrary',
  'getLibraryVersions',
  'contributeLibrary',
  'publishLibrary',
  'deleteLibrary',
  'downloadFile',
  'listOAuthClients',
  'createOAuthClient',
  'updateOAuthClient',
  'deleteOAuthClient',
  'listProducts',
  'getProduct',
  'listProductFirmware',
  'uploadProductFirmware',
  'getProductFirmware',
  'updateProductFirmware',
  'downloadProductFirmware',
  'releaseProductFirmware',
  'listTeamMembers',
  'inviteTeamMember',
  'removeTeamMember',
  'lookupSerialNumber'
];

moduleFor('service:particle', 'Unit | Service | particle', {
  unit: true
});

let particle = new ParticleMock();

// Login tests
skip('it fails if username or password missing or empty', function(assert) {
  let service = this.subject();
  let spy = this.spy(service);
  let mock = this.mock(particle);
  mock.expects('login').once().throws();
  service.login('');
  mock.verify();
  assert(spy.calledOnce);
});

skip('it succeeds because bob took us to victory', function(assert) {
  let service = this.subject();
  let stub = this.stub(service, 'login');
  service.login('bob@particle.io', 'asdf1234');
  assert.ok(stub.calledOnce);
});


// Method checks
test('ensure parity of SDK methods and service', function(assert) {
  let service = this.subject();
  METHODS.forEach((method) => {
    console.log(method + ': ' + service.method);
    assert.ok(service.method)
  });
});
