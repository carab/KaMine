'use strict';

angular.module('kamine.app')
  .controller('NavbarCtrl', function ($scope, $translate, $location, $modal, $routeParams, state) {
    $scope.state = state;
    $scope.refresh = state.init;

    state.init();

    $scope.isActivePage = function(page) {
      var path = '/' + page;
      return ($location.path().substr(0, path.length) === path);
    };
    
    $scope.getPageUrl = function(page) {
      var url = '/' + page;

      if (angular.isDefined($routeParams.project)) {
        url += '/' + $routeParams.project;

        if (angular.isDefined($routeParams.sprint)) {
          url += '/' + $routeParams.sprint;
        }
      }

      return url;
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
      $location.search({
        project: project.id
      });
    };

    $scope.setSprint = function (sprint) {
      $location.search({
        project: state.project.id,
        sprint: sprint.id
      });
    };
  });
