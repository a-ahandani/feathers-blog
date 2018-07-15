// Initializes the `toTags` service on path `/to-tags`
const createService = require('feathers-sequelize');
const createModel = require('../../models/to-tags.model');
const hooks = require('./to-tags.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/to-tags', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('to-tags');

  service.hooks(hooks);
};
