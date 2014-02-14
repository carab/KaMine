'use strict';

describe('Service: collections', function () {

  // load the service's module
  beforeEach(module('kamineApp'));

  // instantiate service
  var collections;
  beforeEach(inject(function (_collections_) {
    collections = _collections_;
  }));

  it('should have a sprints array', function () {
    expect(collections.sprints).toBeArray();
  });

  it('should have a stories array', function () {
    expect(collections.stories).toBeArray();
  });

  it('should have a projects array', function () {
    expect(collections.projects).toBeArray();
  });

});
