'use strict';

describe('Service: Board', function () {

  // load the service's module
  beforeEach(module('kamineApp'));

  // instantiate service
  var Board;
  beforeEach(inject(function (_Board_) {
    Board = _Board_;
  }));

  it('should do something', function () {
    expect(!!Board).toBe(true);
  });

});
