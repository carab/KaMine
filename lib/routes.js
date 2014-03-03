'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Backend API
  app.get('/api/*', api.index);
  
  // Angular partials
  app.get('/partials/*', index.partials);

  // Angular index
  app.get('/*', index.index);
};