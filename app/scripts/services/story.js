'use strict';

angular.module('kamine.app')
  .factory('Story', function ($resource, $filter, config) {
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
          var stories = [],
              regex = new RegExp(config.stories.title);

          angular.forEach(angular.fromJson(data).issues, function (story) {
            if (regex.test(story.subject)) {
              var status = config.getStatusById(story.status.id),
                  priority = config.getPriorityById(story.priority.id);

              story.status = (angular.isDefined(status)) ? status.name : undefined;
              story.priority = (angular.isDefined(priority)) ? priority.name : undefined;
              story.url = config.scheme + '://' + config.host + '/issues/' + story.id;

              stories.push(story)
            }
          });

          return $filter('orderBy')(stories, config.stories.sort);
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
          story.url = config.scheme + '://' + config.host + '/issues/' + story.id;

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
        