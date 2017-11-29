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
  }
});
