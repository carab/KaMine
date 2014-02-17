'use strict';

angular.module('kamineApp')
  .controller('ConfigCtrl', function ($scope, $modalInstance, localStorageService, config) {
    $scope.config = { json: angular.toJson(config) };

    $scope.reset = function () {
      $scope.config.json = angular.toJson(config.getDefaults());
    };

    $scope.save = function () {
      $modalInstance.close($scope.config.json);

      config.save(angular.fromJson($scope.config.json));
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
