import Service from '@ember/service';
import Logger from '@ember/logger';
import Particle from 'particle-api-js';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('particle', new Particle());
  },


  particle: null,
  token: null,


  login(username, password) {
    return this.get('particle')
      .login({ username, password })
      .then((data) => {
        this.set('token', data.body.access_token);
        return true;
      })
      .catch((error) => {
        Logger.error(error);
        return false;
      });
  },

  loggedIn() {
    return !!this.get('token');
  },

  haltIfNotLoggedIn() {
    if !loggedIn() {
      throw new Error("You must call `this.get('particle').login(username, password);` before using the service.");
    }
  },

  throwGenericError(error) {
    throw new Error("There was an error:" + error);
  },

  listDevices() {
    haltIfNotLoggedIn();
    const { particle, token } = this.getProperties('particle', 'token');
    return particle
      .listDevices({ auth: token })
      .then((devices) => devices)
      .catch(throwGenericError);
  },

  callFunction(deviceId, functionName, arg) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .callFunction({
        deviceId,
        auth,
        name: functionName,
        argument: arg
      })
      .then(data => data)
      .catch(throwGenericError)
  },

  claimDevice(deviceId) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .claimDevice({ deviceId, auth })
      .then(data => data)
      .catch(throwGenericError);
  },

  flashDevice(deviceId, files) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .flashDevice({ deviceId, auth, files })
      .then(data => data)
      .catch(throwGenericError);
  },

  getDevice(deviceId) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({ deviceId, auth })
      .then(data => data)
      .catch(throwGenericError);
  },

  getVariable(deviceId, variableName) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({
        deviceId,
        auth,
        name: variableName,
      })
      .then(data => data)
      .catch(throwGenericError);
  },

  removeDevice(deviceId) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({ deviceId, auth })
      .then(data => data)
      .catch(throwGenericError);
  },

  renameDevice(deviceId, name) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({ deviceId, auth, name })
      .then(data => data)
      .catch(throwGenericError);
  },

  signalDevice(deviceId) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .signalDevice({ deviceId, auth, signal: true })
      .then(data => data)
      .catch(throwGenericError);
  },

  sendPublicKey(deviceId, key) {
    haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .sendPublicKey({ deviceId, auth, key })
      .then(data => data)
      .catch(throwGenericError);
  },
});
