'use strict';

describe('Controller: ChartCtrl', function () {

  // Load the controller's module
  beforeEach(module('kamineApp'));

  var ChartCtrl,
    scope,
    mockCollections,
    mockEntities;

  // Register the mocks
  beforeEach(function () {
    module(function ($provide) {
      mockCollections = 'I am the collections';
      mockEntities = 'I am the entities';

      $provide.value('collections', mockCollections);
      $provide.value('entities', mockEntities);
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartCtrl = $controller('ChartCtrl', {
      $scope: scope
    });
  }));

  it('should attach the entities to the scope', function () {
    expect(scope.entities).toBe(mockEntities);
  });

  it('should attach the collections to the scope', function () {
    expect(scope.collections).toBe(mockCollections);
  });
});
