'use strict';

angular.module('kamine.app')
  .controller('ConfigCtrl', function ($scope, $modalInstance, localStorageService, config, state) {
    $scope.config = angular.copy(config);
    $scope.json = {
      value: angular.toJson($scope.config),
      enabled: false
    };

    $scope.state = state;

    state.loadStatutes();
    state.loadPriorities();
    state.loadTrackers();

    $scope.toggleJsonEnabled = function () {
      $scope.json.enabled = !$scope.json.enabled;

      if ($scope.json.enabled) {
        $scope.json.value = angular.toJson($scope.config);
      } else {
        angular.copy(angular.fromJson($scope.json.value), $scope.config);
      }
    };

    $scope.reset = function () {
      $scope.config = angular.copy(config);
      $scope.json.value = angular.toJson(config);
    };

    $scope.restore = function () {
      $scope.config = angular.copy(config.getDefaults());
      $scope.json.value = angular.toJson(config.getDefaults());
    };

    $scope.save = function () {
      var newConfig = $scope.config;

      if ($scope.json.enabled) {
        newConfig = angular.fromJson($scope.json.value);
      }

      $modalInstance.close(newConfig);
      
      config.set(newConfig);
      config.save();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
