'use strict';

describe('Service: board', function () {

  // Load the service's module
  beforeEach(module('kamineApp'));

  // Instantiate service
  var board;
  beforeEach(inject(function (_board_) {
    board = _board_;
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
