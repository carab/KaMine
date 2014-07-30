'use strict';

angular.module('kamine.app')
  .factory('Tracker', function ($resource, config) {
    return $resource('/api/trackers/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          return angular.fromJson(data).trackers;
        }
      }
    });
  });
        