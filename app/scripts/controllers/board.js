'use strict';

angular.module('kamineApp')
  .controller('BoardCtrl', function ($scope, board, entities, collections) {
    $scope.columns = board.columns;
    $scope.collections = board.collections;
    $scope.entities = entities;
  });
