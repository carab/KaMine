'use strict';

angular.module('kamineApp')
  .controller('ChartCtrl', function ($scope, entities) {
    $scope.entities = entities;
  });
