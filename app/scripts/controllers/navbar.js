'use strict';

angular.module('kamine.app')
  .controller('NavbarCtrl', function ($scope, $translate, $location, $modal, state) {
    $scope.state = state;

    $scope.isActivePath = function(path) {
      return ($location.path().substr(0, path.length) === path);
    };

    $scope.isActiveLanguage = function (language) {
      return ($translate.use() === language);
    };

    $scope.setLanguage = function (language) {
      $translate.use(language);
    };

    $scope.showConfiguration = function () {
      $modal.open({
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
      });
    };
  });
