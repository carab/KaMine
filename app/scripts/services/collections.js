'use strict';

angular.module('kamineApp')
  .service('collections', function collections (Project, Issue, entities, config) {
    this.projects = [];
    this.sprints = [];
    this.stories = [];
  });
