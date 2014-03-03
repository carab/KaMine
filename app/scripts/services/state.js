'use strict';

angular.module('kamine.app')
  .service('state', function state ($http, config, User, Project, Story, Sprint) {
    this.user = {};
    this.project = {};
    this.sprint = {};
    this.story = {};

    this.projects = [];
    this.sprints = [];
    this.stories = [];

    this.refresh = function () {
      this.user = User.get({ 'id': 'current' });

      this.sprints = [];
      this.projects = [];
      this.stories = [];
      this.project = {};
      this.sprint = {};
      this.story = {};

      this.projects = Project.query({
        'sort': config.projects.sort,
        'limit': config.limit
      });
    };
  });
