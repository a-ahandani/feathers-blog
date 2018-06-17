// Initializes the `comments` service on path `/comments`
const createService = require('feathers-sequelize');
const createModel = require('../../models/comments.model');
const hooks = require('./comments.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/comments', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('comments');

  service.hooks(hooks);
};
