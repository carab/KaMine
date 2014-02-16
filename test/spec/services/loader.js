'use strict';

describe('Service: Loader', function () {

  beforeEach(module('kamineApp'));

  var Loader;
  beforeEach(inject(function ($injector) {
    Loader = $injector.get('Loader');
  }));

  it('should do something', function () {
    expect(!!Loader).toBe(true);
  });

});
