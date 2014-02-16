'use strict';

angular.module('kamineApp')
  .filter('hasStatus', function () {
    return function(story, statutes) {
      // Cast to array if not array
      if (!angular.isArray(statutes)) {
        statutes = [statutes];
      }

      return (statutes.indexOf(story.status.name) !== -1);
    };
  });
