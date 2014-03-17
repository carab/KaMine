'use strict';

angular.module('kamine.app')
  .factory('Story', function ($resource, config) {
    return $resource('/api/issues/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          var stories = angular.fromJson(data).issues;

          angular.forEach(stories, function (story) {
            var status = config.getStatusById(story.status.id),
                priority = config.getPriorityById(story.priority.id);

            story.status.name = (angular.isDefined(status)) ? status.name : undefined;
            story.priority.name = (angular.isDefined(priority)) ? priority.name : undefined;
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
        