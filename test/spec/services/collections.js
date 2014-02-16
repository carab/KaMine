'use strict';

describe('Service: collections', function () {

  beforeEach(module('kamineApp'));

  var collections;
  beforeEach(inject(function ($injector) {
    collections = $injector.get('collections');
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
