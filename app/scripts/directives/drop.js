'use strict';

angular.module('kamine.app')
  .directive('drop', function ($rootScope) {
    function dragEnter(evt, element, dropClass) {
      evt.preventDefault();
      element.addClass(dropClass);
    }

    function dragLeave(evt, element, dropClass) {
      element.removeClass(dropClass);
    }

    function dragOver(evt) {
      evt.preventDefault();
    }

    function drop(evt, element, dropClass) {
      evt.preventDefault();
      element.removeClass(dropClass);
    }
  
    return {
      restrict: 'A',
      link: function(scope, element, attrs)  {
        scope.dropModel = scope[attrs.drop];
        scope.dropClass = attrs.dropClass;

        element.bind('dragenter', function(evt) {
          dragEnter(evt, element, scope.dropClass);
        });

        element.bind('dragleave', function(evt) {
          dragLeave(evt, element, scope.dropClass);
        });

        element.bind('dragover', dragOver);

        element.bind('drop', function(evt) {
          drop(evt, element, scope.dropClass);

          $rootScope.$broadcast('dropEvent', $rootScope.draggedScope.dragModel, scope.dropModel);
        });
      }
    };
  });
