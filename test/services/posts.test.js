const assert = require('assert');
const app = require('../../src/app');

describe('\'Posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('posts');

    assert.ok(service, 'Registered the service');
  });
});
