'use strict';

angular.module('kamineApp')
  .factory('Project', function ($resource, config) {
    return $resource(':scheme\\:\\/\\/:host\\::port/projects/:id.json', {
      host: function () { return config.host; },
      scheme: function () { return config.scheme; },
      port: function () { return config.port; }
    });
  });
