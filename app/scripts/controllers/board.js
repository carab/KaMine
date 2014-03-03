'use strict';

angular.module('kamine.app')
  .controller('BoardCtrl', function ($scope, board, state) {
    $scope.columns = board.columns;
    $scope.state = state;
    console.log('bouh');
  });
