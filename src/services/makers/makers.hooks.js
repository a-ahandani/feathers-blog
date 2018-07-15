const { authenticate } = require('@feathersjs/authentication').hooks;

const modelsList = require('../../hooks/models-list');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [modelsList()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
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
