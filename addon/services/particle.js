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
  login(username = null, password = null) {
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

  throwGenericError(error = "yo dawg") {
    throw new Error("There was an error:" + error);
  },

  /**
   * apiCall
   *  - Generic API call function
   * @param {String} methodName - Name of method to be called
   * @param {Object} methodArgs - Arguments for method
   * @return {Promise} Response of function call.
   */
  apiCall(methodName = '', methodArgs = {}) {
    this.haltIfNotLoggedIn();
    const { particle, auth } = this.getProperties('particle', 'token');
    const method = this.[methodName];
    methodArgs['auth'] = auth;
    return particle
      .method(methodArgs)
      .then(data => data)
      .catch(this.throwGenericError);
  },


  /**
   * listDevices
   *  - List devices for a user
   * @returns {ArrayPromise} - A list of the devices
   */
  listDevices() {
    return this.apiCall('listDevices');
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
  callFunction(deviceId = null, name = null, argument = null) {
    const options = { deviceId, name, argument };
    return this.apiCall('callFunction', options);
  },

  /**
   * claimDevice
   *  - Claims device and adds it to the user account
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  claimDevice(deviceId = null) {
    const options = { deviceId };
    return this.apiCall('claimDevice', options);
  },

  /**
   * flashDevice
   *  - Flash firmware to device
   * @param {String} deviceId - The device ID
   * @param {Object} files - Reference structure here https://docs.particle.io/reference/javascript/#flashdevice
   * @returns {Object} Data returned by the particle function call
   */
  flashDevice(deviceId = null, files = {}) {
    const options = { deviceId, files };
    return this.apiCall('flashDevice', options);
  },

  /**
   * getDevice
   *  - Gets all attributes for the device
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  getDevice(deviceId = null) {
    const options = { deviceId };
    return this.apiCall('getDevice', options);
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
  getVariable(deviceId = null, name = null) {
    const options = { deviceId, name };
    return this.apiCall('getVariable', options);
  },

  /**
   * removeDevice
   *  - Removes device from the user account
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  removeDevice(deviceId = null) {
    const options = { deviceId };
    return this.apiCall('removeDevice', options);
  },

  /**
   * renameDevice
   *  - Renames device for the user account
   * @param {String} deviceId - The device ID
   * @param {String} name - The new name you would like to call the device
   * @returns {Object} Data returned by the particle function call
   */
  renameDevice(deviceId = null, name = null) {
    const options = { deviceId, name };
    return this.apiCall('renameDevice', options);
  },

  /**
   * signalDevice
   *  - Send a signal to the device to shout rainbows
   *  - Send a signal to the device to stop shouting rainbows
   * @param {String} deviceId - The device ID
   * @returns {Object} Data returned by the particle function call
   */
  signalDevice(deviceId = null) {
    const options = { deviceId, signal: true };
    return this.apiCall('signalDevice', options);
  },

  /**
   * sendPublicKey
   *  - Send public key for a device to the cloud
   * @param {String} deviceId - The device ID
   * @param {String} key - The public key to be sent
   * @returns {Object} Data returned by the particle function call
   */
  sendPublicKey(deviceId = null, key) {
    const options = { deviceId, key };
    return this.apiCall('sendPublicKey', options);
  },


  /**
   * getEventStream
   *  - Get event listener to an stream in the Particle cloud
   * @param {String} deviceId - The device ID of events to listen to (optional).
   * @param {String} name - The name of the event to listen to (optional).
   * @returns {EventListener} An EventListener object with stream data.
   */
  getEventStream(deviceId = null, name = null) {
    const options = { deviceId, name };
    return this.apiCall('getEventStream', options);
  },

  /**
   * publishEvent
   *  - Register an event stream in the Particle cloud.
   * @param {String} name - Name of event being sent
   * @param {Object} data - Reference object structure here https://docs.particle.io/reference/javascript/#geteventstream
   * @returns {Object} Data returned by particle call.
  */
  publishEvent(name = null, data = {}) {
    const options = { name, data };
    return this.apiCall('publishEvent', options);
  },


  /**
   * compileCode
   *  - Compiles files in the Particle cloud
   * @param {Object} files - Reference structure here https://docs.particle.io/reference/javascript/#compilecode
   * @returns {Object} Data returned by particle call.
   */
  compileCode(files = {}) {
    const options = { files };
    return this.apiCall('compileCode', options);
  },
});
