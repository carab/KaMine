'use strict';

angular.module('kamineApp')
  .controller('BoardCtrl', function ($scope, board, entities, collections) {
    $scope.columns = board.columns;
    $scope.entities = entities;
    $scope.collections = collections;
  });
