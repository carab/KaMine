'use strict';

describe('Service: Issue', function () {

  beforeEach(module('kamineApp'));

  var Issue;
  beforeEach(inject(function ($injector) {
    Issue = $injector.get('Issue');
  }));

  it('should do something', function () {
    expect(!!Issue).toBe(true);
  });

});
