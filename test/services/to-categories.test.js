const assert = require('assert');
const app = require('../../src/app');

describe('\'to-categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('to-categories');

    assert.ok(service, 'Registered the service');
  });
});
