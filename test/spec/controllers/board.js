'use strict';

describe('Controller: BoardCtrl', function () {

  beforeEach(module('kamineApp'));

  var BoardCtrl,
    scope,
    mockCollections,
    mockEntities,
    mockBoard;

  beforeEach(function () {
    module(function ($provide) {
      mockCollections = 'I am the collections';
      mockEntities = 'I am the entities';
      mockBoard = { columns: 'I am the board columns' };

      $provide.value('collections', mockCollections);
      $provide.value('entities', mockEntities);
      $provide.value('board', mockBoard);
    });
  });

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoardCtrl = $controller('BoardCtrl', { $scope: scope });
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
