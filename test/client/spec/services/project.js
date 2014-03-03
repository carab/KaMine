'use strict';

describe('Service: Project', function () {

  beforeEach(module('kamine.app'));

  var Project;
  beforeEach(inject(function ($injector) {
    Project = $injector.get('Project');
  }));

  it('should do something', function () {
    expect(!!Project).toBe(true);
  });

});
