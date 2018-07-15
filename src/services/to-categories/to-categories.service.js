// Initializes the `to-categories` service on path `/to-categories`
const createService = require('feathers-sequelize');
const createModel = require('../../models/to-categories.model');
const hooks = require('./to-categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/to-categories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('to-categories');

  service.hooks(hooks);
};
