'use strict';

angular.module('kamineApp')
  .controller('NavbarCtrl', function ($scope, $translate, $location) {
    $scope.switchLanguage = function (language) {
      $translate.uses(language);
      return false;
    };

    $scope.isActive = function(path) {
      return ($location.path().substr(0, path.length) === path);
    };
  });
