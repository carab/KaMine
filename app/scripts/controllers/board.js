'use strict';

angular.module('kamineApp')
  .controller('BoardCtrl', function ($scope, board, collections, entities) {
    $scope.columns = board.columns;
    $scope.entities = entities;
    $scope.collections = collections;
  });
