'use strict';

angular.module('kamineApp')
  .factory('Project', function ($resource, config) {
    return $resource(config.url + 'projects/:id.json');
  });
