'use strict';

describe('Service: entities', function () {

  // load the service's module
  beforeEach(module('kamineApp'));

  // instantiate service
  var entities;
  beforeEach(inject(function (_entities_) {
    entities = _entities_;
  }));

  it('should have a user object', function () {
    expect(entities.user).toBeObject();
  });

  it('should have a sprint object', function () {
    expect(entities.sprint).toBeObject();
  });

  it('should have a story object', function () {
    expect(entities.story).toBeObject();
  });

  it('should have a project object', function () {
    expect(entities.project).toBeObject();
  });

});
