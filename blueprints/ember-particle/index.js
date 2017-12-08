/* eslint-env node */
module.exports = {
  description: 'Ember service for the Particle API',

  afterInstall() {
    return this.addBowerPackageToProject('particle-api-js');
  }
};
