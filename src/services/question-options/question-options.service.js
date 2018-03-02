// Initializes the `question-options` service on path `/question-options`
const createService = require('feathers-mongoose');
const createModel = require('../../models/question-options.model');
const hooks = require('./question-options.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'question-options',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/question-options', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('question-options');

  service.hooks(hooks);
};
