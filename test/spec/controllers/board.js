'use strict';

describe('Controller: BoardCtrl', function () {

  // load the controller's module
  beforeEach(module('kamineApp'));

  var BoardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardCtrl = $controller('BoardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of columns to the scope', function () {
    expect(scope.columns.length).toBe(5);
  });
});
