'use strict';

angular.module('kamine.app')
  .factory('Project', function ($resource, config, $filter) {
    return $resource('/api/projects/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          var projects = angular.fromJson(data).projects;
          
          return $filter('orderBy')(projects, config.projects.sort);
        }
      }
    });
  });
