'use strict';

angular.module('kamineApp')
  .filter('hasStatus', function () {
    return function(stories, statutes) {
      var filteredStories = [];

      // Cast to array if not array
      if (!angular.isArray(statutes)) {
        statutes = [statutes];
      }

      angular.forEach(stories, function (story) {
        if (statutes.indexOf(story.status) !== -1) {
          filteredStories.push(story);
        }
      });

      return filteredStories;
    };
  });
