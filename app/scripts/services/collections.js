'use strict';

angular.module('kamineApp')
  .service('collections', function collections () {
    this.projects = [];
    this.sprints = [];
    this.stories = [];
  });
