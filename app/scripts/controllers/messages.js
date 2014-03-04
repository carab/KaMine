'use strict';

angular.module('kamine.app')
  .controller('MessagesCtrl', function ($scope, Message) {
    $scope.Message = Message;
  });
