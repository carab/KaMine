'use strict';

angular.module('kamine.app')
  .factory('Sprint', function ($resource, config) {
    return $resource('/api/issues/:id.json', config.getParams(), {
      list: {
        method: 'GET',
        isArray: true,
        params: {
          'tracker_id': config.sprints.tracker,
          'sort': config.sprints.sort,
          'limit': config.limit,
          'status_id': '*'
        },
        transformResponse: function (data) {
          return angular.fromJson(data).issues;
        }
      }
    });
  });
        