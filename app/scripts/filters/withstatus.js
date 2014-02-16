'use strict';

angular.module('kamineApp')
  .filter('withStatus', function ($filter) {
    return function(stories, statutes) {
      var filteredStories = [];

      angular.forEach(stories, function (story) {
        if ($filter('hasStatus')(story, statutes)) {
          filteredStories.push(story);
        }
      });

      return filteredStories;
    };
  });
