'use strict';

angular.module('kamine.app')
  .controller('ChartCtrl', function ($rootScope, $scope, $translate, state) {
    $scope.state = state;

    $scope.process = function () {
      state.promises.entries.then(function () {
        $scope.theoricRemainingPerDay = [];
        $scope.realRemainingPerDay = [];
        $scope.days = [];

        var dates = [],
            realRemaining = state.sprint.estimated_hours;

        // Fill real remaining per day
        $scope.realRemainingPerDay.push(realRemaining);
        angular.forEach(state.entries, function (entry) {
          var index = dates.indexOf(entry.spent_on);

          if (index === -1) {
            index = dates.length;
            dates.push(entry.spent_on);
            $scope.realRemainingPerDay.push(0);
          }

          $scope.realRemainingPerDay[index + 1] += entry.remaining_hours;
        });

        if (angular.isUndefined($scope.maxDays)) {
          $scope.maxDays = dates.length;
        }

        var theoricRemaining = state.sprint.estimated_hours,
            theoricHoursByDay = state.sprint.estimated_hours / $scope.maxDays;

        // Generate days
        for (var i = 0; i <= $scope.maxDays; i++) {
          // Fill days
          $scope.days.push(i);

          // Fill theoric remaining per day
          $scope.theoricRemainingPerDay.push(theoricRemaining);

          theoricRemaining -= theoricHoursByDay;
          theoricRemaining = Math.round(theoricRemaining * 100) / 100; // Solve this : http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html

          // Prefill real remaining per day
        }

        // Force 0 as last value in case rounding failed
        $scope.theoricRemainingPerDay[$scope.days.length - 1] = 0;

        // Build the array used by the chart
        var data = [];
        angular.forEach($scope.days, function (day, index) {
          var row = {
            'c': [
              {
                'v': day
              },
              {
                'v': $scope.theoricRemainingPerDay[index]
              }
            ]
          };

          if (angular.isDefined($scope.realRemainingPerDay[index])) {
            row['c'].push({ 'v': $scope.realRemainingPerDay[index] });
          }

          data.push(row);
        });

        // Build the object for the chart
        $scope.chartObject = {
          'type': 'LineChart',
          'displayed': true,
          'data': {
            'cols': [{
              'id': 'day',
              'label': $translate.instant('chart.day'),
              'type': 'string',
              'p': {}
            }, {
              'id': 'theoric-remaining',
              'label': $translate.instant('chart.theoricRemaining'),
              'type': 'number',
              'p': {}
            }, {
              'id': 'real-remaining',
              'label': $translate.instant('chart.realRemaining'),
              'type': 'number',
              'p': {}
            }],
            'rows': data
          },
          'options': {
            'title': '',
            'height': 400,
            'displayExactValues': true,
            'vAxis': {
              'title': $translate.instant('chart.hours'),
            },
            'hAxis': {
              'title': $translate.instant('chart.days'),
            }
          },
          'formatters': {}
        };
      });
    };

    // Process the data when entries are loaded
    $scope.$watch(state.entries, function () {
      $scope.process();
    });

    // Reload the chart when the language is changed
    $rootScope.$on('$translateChangeEnd', function(event) {
      $scope.process();
    });
  });
