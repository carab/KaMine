'use strict';

describe('Filter: hasStatus', function () {

  // load the filter's module
  beforeEach(module('kamineApp'));

  // initialize a new instance of the filter before each test
  var hasStatus;
  beforeEach(inject(function ($filter) {
    hasStatus = $filter('hasStatus');
  }));

  it('should return the input prefixed with "hasStatus filter:"', function () {
    var stories = [{
      status: 'todo'
    }, {
      status: 'testko'
    }, {
      status: 'inprogress'
    }, {
      status: 'totest'
    }, {
      status: 'testing'
    }, {
      status: 'done'
    }];

    var statutes = ['todo', 'testko'];

    expect(hasStatus(stories, statutes).length).toBe(2);
    
  });

});
