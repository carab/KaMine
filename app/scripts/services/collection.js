'use strict';

angular.module('kamineApp')
  .service('Collection', function Collection() {
    this.projects = [];
    this.sprints = [];
    this.stories = [];
  });
