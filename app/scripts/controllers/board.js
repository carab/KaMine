'use strict';

angular.module('kamine.app')
  .controller('BoardCtrl', function ($rootScope, $scope, $modal, board, state, config, Message) {
    $scope.columns = board.columns;
    $scope.state = state;
    $scope.filters = {};

    $scope.resetLayout = function () {
      $rootScope.$broadcast('masonry.reload');
    };

    $scope.logTime = function (story) {
      state.setStory(story);

      $modal.open({
        templateUrl: 'partials/log-time.html',
        controller: 'LogTimeCtrl'
      });
    };

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

      // Save it and get it again to check if the status has been updated
      story.$save(function () {
        story.$get(function () {
          if (story.status === newStatus.name) {
            Message.addSuccess({
              template: 'partials/log-time-message.html',
              addTime: function () {
                $scope.logTime(story);
              }
            }, {}, 5);
          } else {
            Message.addDanger('message.storyUpdateError');
          }
        });
      });
    });

  });
