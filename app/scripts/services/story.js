'use strict';

angular.module('kamineApp')
  .factory('Story', function ($resource, config) {
    return $resource(config.url + 'issues/:id.json', {}, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data, headers) {
          var stories = angular.fromJson(data).issues;
          
          angular.forEach(stories, function (story) {
            story.status.name = config.getStatusById(story.status.id).name;
          });

          return stories;
        }
      },
      save: {
        method: 'PUT',
        transformRequest: function (story, headers) {
          var data = {
            'status_id': config.getStatusById(story.status.name).id
          };

          return angular.toJson(data);
        }
      }
    });
  });
        