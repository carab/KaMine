'use strict';

angular.module('kamineApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pasvaz.bindonce',
  'pascalprecht.translate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/board', {
        templateUrl: 'views/board.html',
        controller: 'BoardCtrl'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl'
      })
      .otherwise({
        redirectTo: '/board'
      });
  })
  .config(function ($translateProvider) {
    $translateProvider
      .useStaticFilesLoader({
        prefix: '/translations/',
        suffix: '.json'
      })
      .useLocalStorage()
      .preferredLanguage('en')
      .fallbackLanguage('en');
  })
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
