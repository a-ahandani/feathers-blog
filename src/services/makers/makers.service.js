// Initializes the `makers` service on path `/makers`
const createService = require('./makers.class.js');
const hooks = require('./makers.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/makers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('makers');

  service.hooks(hooks);
};
