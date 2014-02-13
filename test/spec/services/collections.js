'use strict';

describe('Service: collections', function () {

  // load the service's module
  beforeEach(module('kamineApp'));

  // instantiate service
  var collections;
  beforeEach(inject(function (_collections_) {
    collections = _collections_;
  }));

  it('should do something', function () {
    expect(!!collections).toBe(true);
  });

});
