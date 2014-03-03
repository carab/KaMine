'use strict';

angular.module('kamine.app')
  .factory('Project', function ($resource, config) {
    return $resource('/api/projects/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          return angular.fromJson(data).projects;
        }
      }
    });
  });
