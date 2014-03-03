'use strict';

describe('Service: board', function () {

  beforeEach(module('kamine.app'));

  var board;
  beforeEach(inject(function ($injector) {
    board = $injector.get('board');
  }));

  it('should have an array of columns with a name and a statutes array', function () {
    expect(board.columns).toBeArrayOfObjects();
    expect(board.columns).toBeArrayOfObjects();
    expect(board.columns).toBeNonEmptyArray();

    angular.forEach(board.columns, function (column) {
      expect(column.name).toBeNonEmptyString();
      expect(column.statutes).toBeArrayOfStrings();
      expect(column.statutes).toBeNonEmptyArray();
    });
  });

});
