'use strict';

angular.module('kamineApp')
  .controller('NavbarCtrl', function ($scope, $http, $translate, $location, config, entities, collections, User, Project, Issue) {
    $scope.entities = entities;
    $scope.collections = collections;
    $scope.translate = $translate;

    $scope.isActive = function(path) {
      return ($location.path().substr(0, path.length) === path);
    };

    $scope.setUser = function () {
      /*jshint camelcase: false */
      $http.defaults.headers.common['X-Redmine-API-Key'] = entities.user.api_key;
      /*jshint camelcase: true */

      entities.user = User.get({ 'id': 'current' });

      collections.sprints = [];
      collections.projects = [];
      collections.stories = [];
      entities.project = new Project();
      entities.sprint = new Issue();
      entities.story = new Issue();

      collections.projects = Project.query({
        'sort': config.projects.sort,
        'limit': config.limit
      });
    };

    $scope.setProject = function (project) {
      entities.project = project;

      collections.sprints = [];
      collections.stories = [];
      entities.sprint = new Issue();
      entities.story = new Issue();

      collections.sprints = Issue.query({
        'project_id': entities.project.id,
        'tracker_id': config.sprints.tracker,
        'sort': config.sprints.sort,
        'limit': config.limit,
        'status_id': '*'
      });
    };

    $scope.setSprint = function (sprint) {
      entities.sprint = sprint;

      collections.stories = [];
      entities.story = new Issue();

      collections.stories = Issue.query({
        'project_id': entities.project.id,
        'parent_id': entities.sprint.id,
        'tracker_id': config.sprints.tracker,
        'sort': config.sprints.sort,
        'limit': config.limit,
        'status_id': '*'
      });
    };
  });
