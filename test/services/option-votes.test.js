const assert = require('assert');
const app = require('../../src/app');

describe('\'option-votes\' service', () => {
  it('registered the service', () => {
    const service = app.service('option-votes');

    assert.ok(service, 'Registered the service');
  });
});
