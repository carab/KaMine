'use strict';

angular.module('kamine.app')
  .filter('userList', function () {
    return function(stories) {
      var users = [],
          ids = [];

      angular.forEach(stories, function (story) {
        if (
          angular.isDefined(story.assigned_to) &&
          ids.indexOf(story.assigned_to.id) === -1
        ) {
          users.push(story.assigned_to);
          ids.push(story.assigned_to.id);
        }
      });

      return users;
    };
  });
