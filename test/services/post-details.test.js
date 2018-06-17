const assert = require('assert');
const app = require('../../src/app');

describe('\'post_details\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-details');

    assert.ok(service, 'Registered the service');
  });
});
