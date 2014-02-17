'use strict';

/**
 * This global hook is defined to override the async load of $translate
 */
beforeEach(function() {
  module('kamine.app', function config($translateProvider) {
    $translateProvider.translations('en', {});
    $translateProvider.useLoader(null);
    $translateProvider.preferredLanguage('en');
  });
});
