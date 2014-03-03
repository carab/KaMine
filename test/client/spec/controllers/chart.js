'use strict';

describe('Controller: ChartCtrl', function () {

  beforeEach(module('kamine.app'));

  var ChartCtrl,
    scope,
    mockCollections,
    mockEntities;

  beforeEach(function () {
    module(function ($provide) {
      mockCollections = 'I am the collections';
      mockEntities = 'I am the entities';

      $provide.value('collections', mockCollections);
      $provide.value('entities', mockEntities);
    });
  });

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
