'use strict';

angular.module('kamineApp')
  .filter('hasStatus', function (config) {
    return function(story, statutes) {
      // Cast to array if not array
      if (!angular.isArray(statutes)) {
        statutes = [statutes];
      }

      var status = config.getStatusById(story.status.id);

      return (angular.isDefined(status) && statutes.indexOf(status.name) !== -1);
    };
  });
