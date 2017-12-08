/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-particle',

  included(app) {
    this._super.included.apply(this, ...arguments);
    this.import('bower_components/particle-api-js/dist/particle.min.js');
  }
};
