'use strict';

describe('Controller: NavbarCtrl', function () {

  beforeEach(module('kamine.app'));

  var NavbarCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));
});
