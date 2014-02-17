'use strict';

describe('Service: config', function () {

  beforeEach(module('kamine.app'));

  var config;
  beforeEach(inject(function ($injector) {
    config = $injector.get('config');
  }));

  it('should do something', function () {
    expect(!!config).toBe(true);
  });

});
