'use strict';

describe('Controller: BoardCtrl', function () {

  // Load the controller's module
  beforeEach(module('kamineApp'));

  var BoardCtrl,
    scope,
    mockCollections,
    mockEntities,
    mockBoard;

  // Register the mocks
  beforeEach(function () {
    module(function ($provide) {
      mockCollections = 'I am the collections';
      mockEntities = 'I am the entities';
      mockBoard = {
        columns: 'I am the board columns'
      };

      $provide.value('collections', mockCollections);
      $provide.value('entities', mockEntities);
      $provide.value('board', mockBoard);
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardCtrl = $controller('BoardCtrl', {
      $scope: scope
    });
  }));

  it('should attach the board columns to the scope', function () {
    expect(scope.columns).toBe(mockBoard.columns);
  });

  it('should attach the entities to the scope', function () {
    expect(scope.entities).toBe(mockEntities);
  });

  it('should attach the collections to the scope', function () {
    expect(scope.collections).toBe(mockCollections);
  });
});
