'use strict';

angular.module('kamine.app')
  .service('state', function state ($http, config, User, Project, Story, Sprint) {
    this.key = '';
    this.user = new User();
    this.project = new Project();
    this.sprint = new Sprint();
    this.story = new Story();

    this.projects = [];
    this.sprints = [];
    this.stories = [];

    this.updateKey = function () {
      this.user = User.get({ 'id': 'current', 'key': this.key });

      this.sprints = [];
      this.projects = [];
      this.stories = [];
      this.project = new Project();
      this.sprint = new Sprint();
      this.story = new Story();

      this.projects = Project.query({
        'sort': config.projects.sort,
        'limit': config.limit,
        'key': this.key
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
        'status_id': '*',
        'key': this.key
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
        'status_id': '*',
        'key': this.key
      });
    };

    this.setStory = function (story) {
      this.story = story;
    };
  });
