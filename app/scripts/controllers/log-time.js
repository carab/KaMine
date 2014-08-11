'use strict';

angular.module('kamine.app')
  .controller('LogTimeCtrl', function ($scope, $filter, $modalInstance, Message, state, Entry) {
    var date = new Date();

    var story = state.story,
        entry = new Entry({
          hours: 1,
          issue_id: story.id,
          spent_on: $filter('date')(date, 'yyyy-MM-dd'),
          budget_hours: $filter('toInteger')(story.budget_hours),
          remaining_hours: $filter('toInteger')(story.remaining_hours)
        });

    $scope.story = story;
    $scope.entry = entry;
    $scope.saving = false;

    $scope.save = function () {
      $scope.saving = true;

      if (entry.hours > 0) {
        entry.$save(function (data) {
          if (angular.isDefined(data.id) && angular.isNumber(data.id)) {
            Message.addSuccess('message.logTimeSuccess');

            // Refresh the story
            story.$get();
          } else {
            Message.addDanger('message.logTimeError');
          }
        }, function (data) {
          Message.addDanger('message.logTimeError');
        });

        $modalInstance.dismiss('cancel');
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
