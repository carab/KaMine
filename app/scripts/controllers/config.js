'use strict';

angular.module('kamine.app')
  .controller('ConfigCtrl', function ($scope, $modalInstance, localStorageService, config) {
    $scope.config = angular.copy(config);

    $scope.reset = function () {
      $scope.config = angular.copy(config);
    };

    $scope.restore = function () {
      $scope.config = angular.copy(config.getDefaults());
    };

    $scope.save = function () {
      $modalInstance.close($scope.config);

      config.set($scope.config);
      config.save();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
