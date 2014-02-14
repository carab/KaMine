'use strict';

angular.module('kamineApp')
  .controller('ChartCtrl', function ($scope, collections, entities) {
    $scope.entities = entities;
    $scope.collections = collections;
  });
