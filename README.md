# ember-particle [![Build Status](https://travis-ci.org/mileszim/ember-particle.svg?branch=master)](https://travis-ci.org/mileszim/ember-particle) #

Ember service for the [Particle](https://particle.io/) API.

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
