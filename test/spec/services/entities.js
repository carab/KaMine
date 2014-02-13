'use strict';

describe('Service: entities', function () {

  // load the service's module
  beforeEach(module('kamineApp'));

  // instantiate service
  var entities;
  beforeEach(inject(function (_entities_) {
    entities = _entities_;
  }));

  it('should do something', function () {
    expect(!!entities).toBe(true);
  });

});
