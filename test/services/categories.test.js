const assert = require('assert');
const app = require('../../src/app');

describe('\'categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('categories');

    assert.ok(service, 'Registered the service');
  });
});
