'use strict';

angular.module('kamine.app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pasvaz.bindonce',
  'pascalprecht.translate',
  'LocalStorageModule',
  'ui.bootstrap',
  'wu.masonry'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/board/:project?/:sprint?', {
        templateUrl: 'partials/board.html',
        controller: 'BoardCtrl'
      })
      .when('/chart/:project?/:sprint?', {
        templateUrl: 'partials/chart.html',
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
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .config(function ($tooltipProvider) {
    $tooltipProvider.options({
      placement: 'bottom',
      animation: true,
      popupDelay: 500,
      appendToBody: true
    });
  });
