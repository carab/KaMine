'use strict';

angular.module('kamine.app')
  .factory('Priority', function ($resource, config) {
    return $resource('/api/enumerations/issue_priorities/:id.json', config.getParams(), {
      list: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          var priorities = angular.fromJson(data).issue_priorities;
          return priorities;
        }
      }
    });
  });
        