'use strict';

angular.module('kamine.app')
  .controller('HelpCtrl', function ($scope, $stateParams) {
    $scope.hasSelectedProject = angular.isDefined($stateParams.project);
    $scope.hasSelectedSprint = angular.isDefined($stateParams.sprint);
  });
