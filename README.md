# ember-particle #
[![Build Status](https://travis-ci.org/mileszim/ember-particle.svg?branch=master)](https://travis-ci.org/mileszim/ember-particle) [![npm version](https://badge.fury.io/js/ember-particle.svg)](https://badge.fury.io/js/ember-particle) [![Ember Observer Score](https://emberobserver.com/badges/ember-particle.svg)](https://emberobserver.com/addons/ember-particle)

`ember-particle` is an addon for Ember.js providing an injectable service that acts as a wrapper around the [Particle](https://particle.io/) API.

Installation
------------------------------------------------------------------------------

```
ember install ember-particle
```


Usage
------------------------------------------------------------------------------

`ember-particle` enables all functions identical to their API as it is just a wrapper.

#### API Documentation ####
Complete API docs for all Particle.io methods are available at the JS SDK doc site https://docs.particle.io/reference/javascript/

### Examples ###

##### *login(username, password)* ####

Login a user with a username and password:
```javascript
//...
import { inject as service } from '@ember/service';

export default Controller.extend({
  particle: service('particle'),

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


#### Device Info ####

##### *listDevices()* ####

List devices for a user
```javascript
//...
import { inject as service } from '@ember/service';

export default Controller.extend({
  particle: service('particle'),
  devices: this.get('particle').listDevices()
});
```

##### *getDevice(deviceId)* ####

Gets all attributes for a device
```javascript
//...
import { inject as service } from '@ember/service';

export default Controller.extend({
  particle: service('particle'),
  device: this.get('particle').getDevice('asdf1234')
});
```


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
