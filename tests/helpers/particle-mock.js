// TODO: Validation testing?

export default class ParticleMock {
  constructor() {}
  login(username, password) {
    const validUsername = 'bob@particle.io';
    const validPassword = 'asdf1234';
    if (!username || !password) { return false; }
    if (username === validUsername && password === validPassword) { return true; }
  }
}
