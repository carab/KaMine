'use strict';

angular.module('kamine.app')
  .factory('User', function ($resource, config) {
    return $resource('/api/users/:id.json', config.getParams(), {
      current: {
        method: 'GET',
        params: {
          'id': 'current'
        },
        transformResponse: function (data) {
          return angular.fromJson(data).user;
        }
      }
    });
  });
