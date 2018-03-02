const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-authentication-hooks');
const setUser = require('../../setUser.hook');

async function restrictOneVote(context) {
  const result = await context
    .service
    .find({
      query: {
        user: context.data.user,
        option: context.data.option
      }
    });

  if(result.data.length > 0) {
    return Promise.reject(new Error('You can only vote for an option once!'));
  } else {
    return context;
  }
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ setUser, restrictOneVote ],
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
