'use strict';

angular.module('kamineApp')
  .controller('BoardCtrl', function ($scope, Board, Entity, Collection, Api) {
    Entity.user.key = 'ac1e38f476a32078b386c8a39671b5b8d72d98e8';
    Api
      .getProjects()
      .success(function (data) {
        console.log(Collection.projects);
      });


    $scope.columns = Board.columns;
    $scope.entity = Entity;
  });
