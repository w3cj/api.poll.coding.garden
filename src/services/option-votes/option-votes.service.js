// Initializes the `option-votes` service on path `/option-votes`
const createService = require('feathers-mongoose');
const createModel = require('../../models/option-votes.model');
const hooks = require('./option-votes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'option-votes',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/option-votes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('option-votes');

  service.hooks(hooks);
};
