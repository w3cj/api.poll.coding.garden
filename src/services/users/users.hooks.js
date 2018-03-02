const { authenticate } = require('@feathersjs/authentication').hooks;

function customizeGoogleProfile(context) {
  if(context.data.google) {
    const { profile } = context.data.google;
    context.data.display_name = profile.displayName;
    context.data.email = profile.emails[0].value;
    context.data.image = profile._json.image.url;
    return context;
  } else {
    return context;
  }
}

function removeInfo(context) {
  if (context.result.data) {
    context.result.data.forEach(user => {
      delete user.googleId;
      delete user.email;
    });
  } else if (context.result.email) {
    delete context.result.email;
    delete context.result.googleId;
  }
  return context;
}

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ customizeGoogleProfile ],
    update: [ customizeGoogleProfile, authenticate('jwt') ],
    patch: [ customizeGoogleProfile, authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
    ],
    find: [ removeInfo ],
    get: [ removeInfo ],
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
