'use strict';

angular.module('kamine.app')
  .factory('Priority', function ($resource, config) {
    return $resource('/api/enumerations/issue_priorities/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          return angular.fromJson(data).issue_priorities;
        }
      }
    });
  });
        