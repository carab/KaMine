'use strict';

angular.module('kamine.app')
  .service('state', function state ($http, config, User, Project, Story, Sprint) {
    this.user = new User();
    this.project = new Project();
    this.sprint = new Sprint();
    this.story = new Story();

    this.projects = [];
    this.sprints = [];
    this.stories = [];

    this.setUser = function () {
      /*jshint camelcase: false */
      $http.defaults.headers.common['X-Redmine-API-Key'] = this.user.api_key;
      /*jshint camelcase: true */

      //this.user = User.get({ 'id': 'current' });
      User.get({ 'id': 'current' });

      this.sprints = [];
      this.projects = [];
      this.stories = [];
      this.project = new Project();
      this.sprint = new Sprint();
      this.story = new Story();

      this.projects = Project.query({
        'sort': config.projects.sort,
        'limit': config.limit
      });
    };

    this.setProject = function (project) {
      this.project = project;

      this.sprints = [];
      this.stories = [];
      this.sprint = new Sprint();
      this.story = new Story();

      this.sprints = Sprint.query({
        'project_id': this.project.id,
        'tracker_id': config.sprints.tracker,
        'sort': config.sprints.sort,
        'limit': config.limit,
        'status_id': '*'
      });
    };

    this.setSprint = function (sprint) {
      this.sprint = sprint;

      this.stories = [];
      this.story = new Story();

      this.stories = Story.query({
        'project_id': this.project.id,
        'parent_id': this.sprint.id,
        'tracker_id': config.sprints.tracker,
        'sort': config.sprints.sort,
        'limit': config.limit,
        'status_id': '*'
      });
    };
  });
