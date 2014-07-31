'use strict';

angular.module('kamine.app')
  .factory('Entry', function ($resource, $filter, config) {
    return $resource('/api/time_entries/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          return $filter('orderBy')(angular.fromJson(data).time_entries, 'spent_on');
        }
      }
    });
  });
        