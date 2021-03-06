'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, ...arguments);
    this.import('node_modules/particle-api-js/dist/particle.min.js', {
      using: [
        { transformation: 'amd', as: 'particle-api-js' }
      ]
    });
  }
};
