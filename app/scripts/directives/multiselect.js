'use strict';

angular.module('kamine.app')
  .directive('multiselect', function ($translate) {
    return function (scope, element, attrs) {
      element.multiselect();

      // Watch for any changes to the length of our select element
      scope.$watch(function () {
        return element[0].length;
      }, function () {
        element.multiselect('rebuild');
      });

      var keyNone = 'multiselect.none';

      if (angular.isDefined(attrs.multiselectNone)) {
        keyNone = attrs.multiselectNone;
      }

      $translate(keyNone).then(function (translation) {
        element.multiselect('setOptions', {
          nonSelectedText: translation
        });
      });

      // Watch for any changes from outside the directive and refresh
      //scope.$watch(attrs.ngModel, function () {
      //    element.multiselect('refresh');
      //});
    };
  });