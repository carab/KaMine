'use strict';

angular.module('kamine.app')
  .factory('Sprint', function ($resource, config) {
    return $resource(':scheme\\:\\/\\/:host\\::port/issues/:id.json', {
      host: function () { return config.host; },
      scheme: function () { return config.scheme; },
      port: function () { return config.port; }
    });
  });
        