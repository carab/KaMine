'use strict';

angular.module('kamine.app')
  .factory('Status', function ($resource, config) {
    return $resource('/api/issue_statuses/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          var statutes = angular.fromJson(data).issue_statuses;
          return statutes;
        }
      }
    });
  });
        