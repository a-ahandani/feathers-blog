const assert = require('assert');
const app = require('../../src/app');

describe('\'toTags\' service', () => {
  it('registered the service', () => {
    const service = app.service('to-tags');

    assert.ok(service, 'Registered the service');
  });
});
