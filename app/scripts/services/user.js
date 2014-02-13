'use strict';

angular.module('kamineApp')
  .factory('User', function ($resource, config) {
    return $resource(config.url + 'users/:id.json');
  });
