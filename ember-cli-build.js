'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {});

  // Import particle for addon dev
  app.import('node_modules/particle-api-js/dist/particle.min.js');

  return app.toTree();
};
