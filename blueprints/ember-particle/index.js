/* eslint-env node */
module.exports = {
  description: 'Ember service for the Particle API',

  afterInstall() {
    return this.addPackageToProject('particle-api-js', '7.2.3');
  }
};
