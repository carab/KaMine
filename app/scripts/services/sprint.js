'use strict';

angular.module('kamine.app')
  .factory('Sprint', function ($resource, config) {
    return $resource('/api/issues/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          return angular.fromJson(data).issues;
        }
      }
    });
  });
        