'use strict';

angular.module('kamine.app')
  .controller('BoardCtrl', function ($rootScope, $scope, board, state, config) {
    $scope.columns = board.columns;
    $scope.state = state;
    $scope.filters = {};

    // On drag and drop story, save its new status
    $rootScope.$on('dropEvent', function(event, story, column) {

      // Check if the story has move to a new column
      if (-1 !== column.statutes.indexOf(story.status)) {
        return;
      }

      var oldStatus = config.getStatusByName(story.status),
          newStatus = null;

      // Cancel drag & drop if no corresponding
      if (angular.isUndefined(oldStatus)) {
        return;
      }

      // Find the new status if there is one
      angular.forEach(oldStatus.next, function (name) {
        if (-1 !== column.statutes.indexOf(name)) {
          newStatus = config.getStatusByName(name);
          return false;
        }
      });

      // Cancel drag & drop if no status found in the column among next statutes
      if (null === newStatus) {
        return;
      }

      story.status = newStatus.name;
      story.$save();

      console.log(story);
      console.log(newStatus);
    });
  });
