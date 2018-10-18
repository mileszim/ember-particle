'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, ...arguments);
    this.import('bower_components/particle-api-js/dist/particle.min.js');
  }
};
