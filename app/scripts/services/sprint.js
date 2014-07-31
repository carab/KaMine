'use strict';

angular.module('kamine.app')
  .factory('Sprint', function ($resource, $filter, config) {
    return $resource('/api/issues/:id.json', config.getParams(), {
      query: {
        method: 'GET',
        isArray: true,
        params: {
          'tracker_id': config.sprints.tracker,
          'sort': config.sprints.sort,
          'limit': config.limit,
          'status_id': '*'
        },
        transformResponse: function (data) {
          var sprints = [],
              regex = new RegExp(config.sprints.title);

          angular.forEach(angular.fromJson(data).issues, function (sprint) {
            if (regex.test(sprint.subject)) {
              sprints.push(sprint);
            }
          });

          return $filter('orderBy')(sprints, config.sprints.sort);
        }
      }
    });
  });
        