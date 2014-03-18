'use strict';

describe('Service: User', function () {

  beforeEach(module('kamine.app'));

  var User;
  beforeEach(inject(function ($injector) {
    User = $injector.get('User');
  }));

  it('should do something', function () {
    expect(!!User).toBe(true);
  });

});
