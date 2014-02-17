'use strict';

angular.module('kamineApp')
  .factory('User', function ($resource, config) {
    return $resource(':scheme\\:\\/\\/:host\\::port/users/:id.json', {
      host: function () { return config.host; },
      scheme: function () { return config.scheme; },
      port: function () { return config.port; }
    });
  });
