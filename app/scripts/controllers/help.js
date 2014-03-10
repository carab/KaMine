'use strict';

angular.module('kamine.app')
  .controller('HelpCtrl', function ($scope, $stateParams) {
    $scope.isProjectSelected = ($stateParams.project.length > 0);
  });
