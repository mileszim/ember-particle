import particleMethods from 'dummy/utils/particle-methods';
import { module, test } from 'qunit';

const PARTICLE_METHODS = [
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

module('Unit | Utility | particle methods');

test('particle method arrays are equal', function(assert) {
  let result = particleMethods;
  assert.deepEqual(result, PARTICLE_METHODS, "particle method arrays are equal");
});