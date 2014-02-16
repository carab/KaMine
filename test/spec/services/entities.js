'use strict';

describe('Service: entities', function () {

  beforeEach(module('kamineApp'));

  var entities;
  beforeEach(inject(function ($injector) {
    entities = $injector.get('entities');
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
