//const addRelationships = require('./hooks/add-relationships');
const { authenticate } = require('@feathersjs/authentication').hooks;
const addRelationships = require('./hooks/add-relationships');
//const emailValidator = require('../../hooks/email-validator');



module.exports = {
  before: {
    all: [addRelationships()],
    find: [],
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
