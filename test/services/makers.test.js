const assert = require('assert');
const app = require('../../src/app');

describe('\'makers\' service', () => {
  it('registered the service', () => {
    const service = app.service('makers');

    assert.ok(service, 'Registered the service');
  });
});
