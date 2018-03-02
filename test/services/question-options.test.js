const assert = require('assert');
const app = require('../../src/app');

describe('\'question-options\' service', () => {
  it('registered the service', () => {
    const service = app.service('question-options');

    assert.ok(service, 'Registered the service');
  });
});
