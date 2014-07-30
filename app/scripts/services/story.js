'use strict';

angular.module('kamine.app')
  .factory('Story', function ($resource, config) {
    return $resource('/api/issues/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        params: {
          'tracker_id': config.stories.tracker,
          'sort': config.stories.sort,
          'limit': config.limit,
          'status_id': '*'
        },
        transformResponse: function (data) {
          var stories = angular.fromJson(data).issues;

          angular.forEach(stories, function (story) {
            var status = config.getStatusById(story.status.id),
                priority = config.getPriorityById(story.priority.id);

            story.status = (angular.isDefined(status)) ? status.name : undefined;
            story.priority = (angular.isDefined(priority)) ? priority.name : undefined;
          });

          return stories;
        }
      },
      get: {
        method: 'GET',
        transformResponse: function (data) {
          var story = angular.fromJson(data).issue,
              status = config.getStatusById(story.status.id),
              priority = config.getPriorityById(story.priority.id);

          story.status = (angular.isDefined(status)) ? status.name : undefined;
          story.priority = (angular.isDefined(priority)) ? priority.name : undefined;

          return story;
        }
      },
      save: {
        method: 'PUT',
        transformRequest: function (story) {
          var data = {
            'issue': {
                'status_id': config.getStatusByName(story.status).id,
                'priority_id': config.getPriorityByName(story.priority).id
              }
            };

          return angular.toJson(data);
        }
      }
    });
  });
        