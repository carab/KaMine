

'use strict';

angular.module('kamine.app')
  .service('state', function ($rootScope, config, User, Project, Story, Sprint, Message) {
    var state = this;

    state.user = {};
    state.project = {};
    state.sprint = {};
    state.story = {};

    state.projects = [];
    state.sprints = [];
    state.stories = [];

    state.init = function () {
      if (!angular.isString(config.key) || config.key.length === 0) {
        Message.addWarning('message.missingKey');
        return;
      }

      state.loadUser()
        .then(function () {
          state.project = {};
          state.sprint = {};
          state.story = {};

          state.sprints = [];
          state.projects = [];
          state.stories = [];

          state.loadProjects();
        }, function () {
          Message.addDanger('message.unableToFindUser');
        });
    };

    state.loadUser = function () {
      return (state.user = User.get({ 'id': 'current' })).$promise;
    };

    state.loadProjects = function () {
      return (state.projects = Project.query({
        'sort': config.projects.sort,
        'limit': config.limit
      })).$promise;
    };

    state.loadSprints = function () {
      return (state.sprints = Sprint.query({
        'project_id': state.project.id,
        'tracker_id': config.sprints.tracker,
        'sort': config.sprints.sort,
        'limit': config.limit,
        'status_id': '*'
      })).$promise;
    };

    state.loadStories = function () {
      return (state.stories = Story.query({
        'project_id': state.project.id,
        'parent_id': state.sprint.id,
        'tracker_id': config.stories.tracker,
        'sort': config.stories.sort,
        'limit': config.limit,
        'status_id': '*'
      })).$promise;
    };

    state.setProject = function (project) {
      state.project = project;
      state.loadSprints();
    };
    // Update the selected project and sprint when the route params change
    $rootScope.$on('$routeUpdate', function (event, route) {
      if (route.params.project !== state.project.id) {
        state.project = {};
        state.sprint = {};
        angular.forEach(state.projects, function (project) {
          if (project.id === route.params.project) {
            state.project = project;
            state.loadSprints();
            return false;
          }
        });
      } else if (route.params.sprint !== state.sprint.id) {
        state.sprint = {};
        angular.forEach(state.sprints, function (sprint) {
          if (sprint.id === route.params.sprint) {
            state.sprint = sprint;
            state.loadStories();
            return false;
          }
        });
      }
    });
  });
