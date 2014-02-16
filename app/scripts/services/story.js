'use strict';

angular.module('kamineApp')
  .factory('Story', function ($resource, config) {
    return $resource(config.url + 'issues/:id.json', {}, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          var stories = angular.fromJson(data).issues;

          angular.forEach(stories, function (story) {
            story.status.name = config.getStatusById(story.status.id).name;
            story.priority.name = config.getPriorityById(story.priority.id).name;
          });

          return stories;
        }
      },
      save: {
        method: 'PUT',
        transformRequest: function (story) {
          var data = {
            'status_id': config.getStatusByName(story.status.name).id,
            'priority_id': config.getPriorityByName(story.priority.name).id
          };

          return angular.toJson(data);
        }
      }
    });
  });
        