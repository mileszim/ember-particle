# ember-particle #

Master Branch: [![Build Status](https://travis-ci.org/mileszim/ember-particle.svg?branch=master)](https://travis-ci.org/mileszim/ember-particle)

Ember service for the [https://particle.io/](Particle) API.

## Usage ##

`ember-particle` is an addon for Ember.js providing an injectable service that acts as a wrapper around the Particle javascript API.

### Install Addon ###

1. `$ ember install ember-particle`
2. When you need to call a function, be sure you are signed in:
    ```javascript
    export default Controller.extend({
      particle: Ember.inject.service('ember-particle'),

      actions: {
        loginToParticle(username, password) {
          this.get('particle')
            .login(username, password)
            .then((success) => {
              alert('you logged into particle! huzzah!');
            })
            .catch((error) => {
              alert('Something went terribly wrong', error);
            });
        }
      }
    });
    ```

### Functions ###

* [#Authentication](Authentication)
  * `[#login](login(username, password))`
* [#DeviceInfo](Device Information)
  * `[#listDevices](listDevices())`
  * `[#getDevice](getDevice(deviceId))`
* [#Interaction](Interaction with Device)
  * `[#callFunction](callFunction(deviceId, name, argument))`
  * `[#getVariable](getVariable(deviceId, name))`
  * `[#signalDevice](signalDevice(deviceId))`
* [#Administration](Administration)
  * `[#claimDevice](claimDevice(deviceId))`
  * `[#removeDevice](removeDevice(deviceId))`
  * `[#renameDevice](renameDevice(deviceId, name))`
  * `[#flashDevice](flashDevice(deviceId, files))`
  * `[#sendPublicKey](sendPublicKey(deviceId, key))`


#### Authentication ####

##### login(username, password) ####

Login a user with a username and password:
    ```javascript
    export default Controller.extend({
      particle: Ember.inject.service('ember-particle'),

      actions: {
        loginToParticle(username, password) {
          this.get('particle')
            .login(username, password)
            .then((success) => {
              alert('you logged into particle! huzzah!');
            })
            .catch((error) => {
              alert('Something went terribly wrong', error);
            });
        }
      }
    });
    ```




# Contributing #

I'm always happy to take on PRs. Here is how to get up and running:

## Installation ##

* `git clone <repository-url>` this repository
* `cd ember-particle`
* `yarn install`

## Running ##

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests ##

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building ##

* `ember build`
