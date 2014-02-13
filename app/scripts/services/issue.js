'use strict';

angular.module('kamineApp')
  .factory('Issue', function ($resource, config) {
    return $resource(config.url + 'issues/:id.json');
  });
