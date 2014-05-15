'use strict';

angular.module('kamine.app')
  .factory('Tracker', function ($resource, config) {
    return $resource('/api/trackers/:id.json', config.getParams(), {
      list: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          var trackers = angular.fromJson(data).trackers;
          return trackers;
        }
      }
    });
  });
        