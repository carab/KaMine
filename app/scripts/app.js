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
  'ui.router',
  'wu.masonry'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('board', {
      url: '/:project/:sprint/board',
      templateUrl: 'partials/board.html',
      controller: 'BoardCtrl'
    })
    .state('chart', {
      url: '/:project/:sprint/chart',
      templateUrl: 'partials/chart.html',
      controller: 'ChartCtrl'
    })
    .state('help', {
      url: '/:project',
      templateUrl: 'partials/help.html',
      controller: 'HelpCtrl'
    });
    /*/.config(function ($routeProvider) {
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
      });/**/
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
