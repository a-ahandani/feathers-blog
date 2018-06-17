const {authenticate} = require('@feathersjs/authentication').hooks;
const emailValidator = require('../../hooks/email-validator');
const addRelationships = require('./hooks/add-relationships');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;



module.exports = {
  before: {
    all: [addRelationships()],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [hashPassword(),emailValidator()],
    update: [hashPassword(), authenticate('jwt')],
    patch: [hashPassword(), authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
