

'use strict';

angular.module('kamine.app')
  .service('state', function (config, User, Project, Story, Sprint, Message) {
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

          state.projects = Project.query({
            'sort': config.projects.sort,
            'limit': config.limit
          });
        }, function () {
          Message.addDanger('message.unableToFindUser');
        });
    };

    state.loadUser = function () {
      return (state.user = User.get({ 'id': 'current' })).$promise;
    };

    state.loadProjects = function () {
      return (state.user = User.get({ 'id': 'current' })).$promise;
    };
  });
