'use strict';

describe('Service: board', function () {

  // load the service's module
  beforeEach(module('kamineApp'));

  // instantiate service
  var board;
  beforeEach(inject(function (_board_) {
    board = _board_;
  }));

  it('should do something', function () {
    expect(!!board).toBe(true);
  });

});
