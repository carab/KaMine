'use strict';

angular.module('kamineApp')
  .factory('Issue', function ($resource, config) {
    return $resource(':scheme\\:\\/\\/:host\\::port/issues/:id.json', {
      host: function () { return config.host; },
      scheme: function () { return config.scheme; },
      port: function () { return config.port; }
    });
  });
