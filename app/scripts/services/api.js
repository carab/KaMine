'use strict';

angular.module('kamineApp')
  .service('Api', function Api($http, Config, Entity, Collection) {
    this.getProjects = function () {
      return $http.jsonp(Config.defaults.url + 'projects.json?key=' + Entity.user.key + '&sort=id&limit=' + Config.defaults.maxItems)
        .success(function (data) {
          Collection.projects = data;
        })
        .error(function(data, status) {
          console.log(data);
          console.log(status);
        });
    };
    
    this.findSprints = function () {

    };

    this.findStories = function () {

    };
  });
