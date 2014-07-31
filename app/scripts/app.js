'use strict';

angular.module('kamine.app', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pasvaz.bindonce',
  'pascalprecht.translate',
  'LocalStorageModule', // To save config on user machine
  'ui.bootstrap',
  'ui.router',
  'wu.masonry',
  'googlechart'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('board', {
      url: '/board/:project/:sprint',
      templateUrl: 'partials/board.html',
      controller: 'BoardCtrl'
    })
    .state('chart', {
      url: '/chart/:project/:sprint',
      templateUrl: 'partials/chart.html',
      controller: 'ChartCtrl'
    })
    .state('selectproject', {
      url: '/',
      templateUrl: 'partials/help.html',
      controller: 'HelpCtrl'
    })
    .state('selectsprint', {
      url: '/:project',
      templateUrl: 'partials/help.html',
      controller: 'HelpCtrl'
    })
    .state('selectview', {
      url: '/:project/:sprint',
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
