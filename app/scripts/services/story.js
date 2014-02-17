'use strict';

angular.module('kamine.app')
  .factory('Story', function ($resource, config) {
    return $resource(':scheme\\:\\/\\/:host\\::port/issues/:id.json', {
      host: function () { return config.host; },
      scheme: function () { return config.scheme; },
      port: function () { return config.port; }
    }, {
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
        