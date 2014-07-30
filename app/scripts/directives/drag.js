'use strict';

angular.module('kamine.app')
  .directive('drag', function ($rootScope) {
    function dragStart(evt, element, dragClass) {
      element.addClass(dragClass);
    }

    function dragEnd(evt, element, dragClass) {
      element.removeClass(dragClass);
    }
  
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        attrs.$set('draggable', 'true');
        scope.dragModel = scope[attrs.drag];
        scope.dragClass = attrs.dragClass;

        element.bind('dragstart', function(evt) {
          $rootScope.draggedScope = scope;
          dragStart(evt, element, scope.dragClass);

          $rootScope.$broadcast('dragstartEvent', scope.dragModel);
        });

        element.bind('dragend', function(evt) {
          dragEnd(evt, element, scope.dragClass);

          $rootScope.$broadcast('dragendEvent', scope.dragModel);
        });
      }
    };
  });