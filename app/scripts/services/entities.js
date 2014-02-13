'use strict';

angular.module('kamineApp')
  .service('entities', function entities (User, Project, Issue) {
    this.user = new User();
    this.project = new Project();
    this.sprint = new Issue();
    this.story = new Issue();
  });
