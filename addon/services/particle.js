import Service from '@ember/service';
import Logger from '@ember/application';
import Particle from 'particle-api-js';
import PARTICLE_METHODS from './-private/-particle-methods';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('particle', new Particle());
    PARTICLE_METHODS.map((methodName) => { this.set(methodName, this._apiCall); });
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

  _haltIfNotLoggedIn() {
    if (!this.loggedIn()) {
      throw new Error("You must call `this.get('particle').login(username, password);` before using the service.");
    }
  },

  _checkForValidMethod(methodName, /* methodArgs = {} */) {
    if (typeof(methodName) !== 'string') { throw new Error('methodName parameter must be a string'); }
    if (!PARTICLE_METHODS[methodName]) { throw new Error(`method '${methodName}' does not exist in particle.io JS SDK`); }
    return true;
  },

  _throwGenericError(error = "yo dawg") {
    throw new Error("There was an error:" + error);
  },

  /**
   * apiCall
   *  - Generic API call function
   * @param {String} methodName - Name of method to be called
   * @param {Object} methodArgs - Arguments for method
   * @return {Promise} Response of function call
   */
  /* eslint "no-unused-vars": "off" */
  _apiCall(methodName = '', methodArgs = {}) {
    this._haltIfNotLoggedIn();
    this._checkForValidMethod(methodName, methodArgs);
    const { particle, token } = this.getProperties('particle', 'token');
    const method = particle[methodName];
    methodArgs['auth'] = token;
    return particle
      .method(methodArgs)
      .then(data => data)
      .catch(this.throwGenericError);
  }
});
