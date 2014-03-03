'use strict';

angular.module('kamine.app')
  .factory('User', function ($resource, config) {
    return $resource('/api/users/:id.json', config.getParams(), {
      get: {
        method: 'GET',
        transformResponse: function (data) {
          return angular.fromJson(data).user;
        }
      }
    });
  });
