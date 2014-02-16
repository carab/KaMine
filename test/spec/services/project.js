'use strict';

describe('Service: Project', function () {

  beforeEach(module('kamineApp'));

  var Project;
  beforeEach(inject(function ($injector) {
    Project = $injector.get('Project');
  }));

  it('should do something', function () {
    expect(!!Project).toBe(true);
  });

});
