import Service from '@ember/service';
import Logger from '@ember/application';
import Particle from 'particle-api-js';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('particle', new Particle());
  },

  particle: null,
  token: null,

  /**
   * login
   *  - Login a user with a username and password, and fetch token
   * @param {String} username - The user's username
   * @param {String} passowrd - Yo mama's password so fat we had to use 64 bits to store it
   * @returns {Boolean} - True: success, False: error!
   */
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
    if (!this.loggedIn()) {
      throw new Error("You must call `this.get('particle').login(username, password);` before using the service.");
    }
  },

  throwGenericError(error) {
    throw new Error("There was an error:" + error);
  },

  /**
   * listDevices
   *  - List devices for a user
   * @returns {ArrayPromise} - A list of the devices
   */
  listDevices() {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .listDevices({ auth })
      .then(devices => devices)
      .catch(this.throwGenericError);
  },

  /**
   * callFunction
   *  - Call a function in device
   *  - The function needs to be defined in the firmware uploaded to the device and registered to the Particle cloud.
   *  - You pass along the name of the function and the params.
   *  - If the function call succeeds, data.return_value is the value returned by the function call on the Particle device.
   * @param {String} deviceId - The device ID
   * @param {String} name - Name of the function being called
   * @param {String} argument - The argument passed to the function being called (optional)
   * @returns {Object} Data returned by the particle function call
   */
  callFunction(deviceId, name, argument) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .callFunction({ deviceId, auth, name, argument })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * claimDevice
   *  - Claims device and adds it to the user account
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  claimDevice(deviceId) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .claimDevice({ deviceId, auth })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * flashDevice
   *  - Flash firmware to device
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  flashDevice(deviceId, files) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .flashDevice({ deviceId, auth, files })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * getDevice
   *  - Gets all attributes for the device
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  getDevice(deviceId) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({ deviceId, auth })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * getVariable
   *  - Gets a variable value for the device
   *  - The variable needs to be defined in your device's code
   *  - If getting the variable succeeds, `data.result` is the value of the variable on the Particle device
   * @param {String} deviceId - The device ID
   * @param {String} name - Name of variable to look up
   * @returns {Object} Data returned by the particle function call
   */
  getVariable(deviceId, name) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({ deviceId, auth, name })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * removeDevice
   *  - Removes device from the user account
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  removeDevice(deviceId) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({ deviceId, auth })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * renameDevice
   *  - Renames device for the user account
   * @param {String} deviceId - The device ID
   * @param {String} name - The new name you would like to call the device
   * @returns {Object} Data returned by the particle function call
   */
  renameDevice(deviceId, name) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .getDevice({ deviceId, auth, name })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * signalDevice
   *  - Send a signal to the device to shout rainbows
   *  - Send a signal to the device to stop shouting rainbows
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  signalDevice(deviceId) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .signalDevice({ deviceId, auth, signal: true })
      .then(data => data)
      .catch(this.throwGenericError);
  },

  /**
   * sendPublicKey
   *  - Send public key for a device to the cloud
   * @param {String} deviceId - The device ID
   * @param {String} key - The public key to be sent
   * @returns {Object} Data returned by the particle function call
   */
  sendPublicKey(deviceId, key) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    return particle
      .sendPublicKey({ deviceId, auth, key })
      .then(data => data)
      .catch(this.throwGenericError);
  },
});
