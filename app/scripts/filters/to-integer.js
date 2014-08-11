'use strict';

angular.module('kamine.app')
  .filter('toInteger', function () {
    return function(value) {
      value = parseInt(value);

      if (angular.isNumber(value) && !isNaN(value)) {
        return value;
      }

      return 0;
    };
  });
