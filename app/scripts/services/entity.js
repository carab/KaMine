'use strict';

angular.module('kamineApp')
  .service('Entity', function Entity() {
    this.user = {};
    this.project = {};
    this.sprint = {};
    this.story = {};
  });
