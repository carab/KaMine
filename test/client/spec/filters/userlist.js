'use strict';

describe('Filter: userList', function () {

  // load the filter's module
  beforeEach(module('kamine.app'));

  // initialize a new instance of the filter before each test
  var userList;
  beforeEach(inject(function ($filter) {
    userList = $filter('userList');
  }));

  it('should return the input prefixed with "userList filter:"', function () {
    var text = 'angularjs';
    expect(userList(text)).toBe('userList filter: ' + text);
  });

});
