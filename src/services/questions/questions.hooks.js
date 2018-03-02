const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');
const setUser = require('../../setUser.hook');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ setUser ],
    update: [ hooks.restrictToOwner({ ownerField: 'user' }) ],
    patch: [ hooks.restrictToOwner({ ownerField: 'user' }) ],
    remove: [ hooks.restrictToOwner({ ownerField: 'user' }) ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
