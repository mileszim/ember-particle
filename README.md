ember-particle [![Build Status](https://travis-ci.org/mileszim/ember-particle.svg?branch=master)](https://travis-ci.org/mileszim/ember-particle)
==============================================================================

Ember service for the [Particle](https://particle.io/) API.

`ember-particle` is an addon for Ember.js providing an injectable service that acts as a wrapper around the Particle javascript API.

Installation
------------------------------------------------------------------------------

```
ember install ember-particle
```


Usage
------------------------------------------------------------------------------

### Signing In ###

When you need to call a function, be sure you are signed in:

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

* [Authentication](#authentication)
  * [`login(username, password)`](#login)
* [Device Info](#deviceInfo)
  * [`listDevices()`](#listDevices)
  * [`getDevice(deviceId)`](#getDevice)
* [Interaction with Device](#interaction)
  * [`callFunction(deviceId, name, argument)`](#callFunction)
  * [`getVariable(deviceId, name)`](#getVariable)
  * [`signalDevice(deviceId)`](#signalDevice)
* [Administration](#administration)
  * [`claimDevice(deviceId)`](#claimDevice)
  * [`removeDevice(deviceId)`](#removeDevice)
  * [`renameDevice(deviceId, name)`](#renameDevice)
  * [`flashDevice(deviceId, files)`](#flashDevice)
  * [`sendPublicKey(deviceId, key)`](#sendPublicKey)


#### <a id="authentication"></a> Authentication ####

##### <a id="login"></a> *login(username, password)* ####

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


#### <a id="deviceInfo"></a> Device Info ####

##### <a id="listDevices"></a> *listDevices()* ####

List devices for a user
```javascript
export default Controller.extend({
  particle: Ember.inject.service('ember-particle'),
  devices: this.get('particle').listDevices()
});
```

##### <a id="getDevice"></a> *getDevice(deviceId)* ####

Gets all attributes for a device
```javascript
export default Controller.extend({
  particle: Ember.inject.service('ember-particle'),
  device: this.get('particle').getDevice('asdf1234')
});
```


#### <a id="interaction"></a> Interaction ####


Contributing
------------------------------------------------------------------------------

I'm always happy to take on PRs. Here is how to get up and running:

## Installation ##

* `git clone https://github.com/mileszim/ember-particle` this repository
* `cd ember-particle`
* `yarn install`

## Running ##

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
