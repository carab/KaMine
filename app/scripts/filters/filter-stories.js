'use strict';

angular.module('kamine.app')
  .filter('filterStories', function ($filter) {
    return function(stories, filters) {
      var filteredStories = [];
      
      angular.forEach(stories, function (story) {
        //if ($filter('hasStatus')(story, statutes)) {
          //filteredStories.push(story);
        //}
      });

      return filteredStories;
    };
  });
