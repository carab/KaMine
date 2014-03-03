'use strict';

angular.module('kamine.app')
  .controller('NavbarCtrl', function ($scope, $translate, $location, $modal, state, config, Sprint, Story) {
    $scope.state = state;

    state.refresh();

    $scope.isActivePath = function(path) {
      return ($location.path().substr(0, path.length) === path);
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
      state.project = project;

      state.sprints = Sprint.query({
        'project_id': state.project.id,
        'tracker_id': config.sprints.tracker,
        'sort': config.sprints.sort,
        'limit': config.limit,
        'status_id': '*'
      }, function () {
        state.stories = [];
        state.sprint = {};
        state.story = {};
      });

      $location.search('project', state.project.id);
    };

    $scope.setSprint = function (sprint) {
      state.sprint = sprint;

      state.stories = Story.query({
        'project_id': state.project.id,
        'parent_id': state.sprint.id,
        'tracker_id': config.stories.tracker,
        'sort': config.stories.sort,
        'limit': config.limit,
        'status_id': '*'
      }, function () {
        state.story = {};
      });

      $location.search('sprint', state.sprint.id);
    };
  });
