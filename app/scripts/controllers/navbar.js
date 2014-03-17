'use strict';

angular.module('kamine.app')
  .controller('NavbarCtrl', function ($rootScope, $scope, $translate, $location, $modal, $state, state) {
    $scope.state = state;

    state.refresh();

    $scope.canShowViews = function () {
      return (angular.isDefined(state.project.id) && angular.isDefined(state.sprint.id));
    };

    $scope.isActiveLanguage = function (language) {
      return ($translate.use() === language);
    };

    $scope.setLanguage = function (language) {
      $translate.use(language);
    };

    $scope.showConfiguration = function () {
      $modal.open({
        templateUrl: 'partials/config.html',
        controller: 'ConfigCtrl'
      });
    };

    $scope.setProject = function (project) {
      $state.go('selectsprint', {
        project: project.id
      });
    };

    $scope.setSprint = function (sprint) {
      //$state.go($state.current.name, {
      var stateName = $state.current.name;

      if (stateName === 'selectsprint') {
        stateName = 'selectview';
      }

      $state.go(stateName, {
        project: state.project.id,
        sprint: sprint.id
      });
    };
  });
