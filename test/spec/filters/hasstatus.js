'use strict';

describe('Filter: hasStatus', function () {

  // load the filter's module
  beforeEach(module('kamineApp'));

  // initialize a new instance of the filter before each test
  var hasStatus,
    config;

  beforeEach(inject(function ($filter, _config_) {
    hasStatus = $filter('hasStatus');
    config = _config_;
  }));

  it('should return true if the story does have the specified status, and false if it does not', function () {
    var status = 'todo',
      story = {
        status: { id: config.getStatusByName('todo').id }
      };

    expect(hasStatus(story, status)).toBeTrue();

    status = 'testko';

    expect(hasStatus(story, status)).toBeFalse();
  });

  it('should also work with an array of statutes', function () {
    var status = ['todo', 'testko'],
      story = {
        status: { id: config.getStatusByName('todo').id }
      };

    expect(hasStatus(story, status)).toBeTrue();

    story = {
      status: { id: config.getStatusByName('testko').id }
    };

    expect(hasStatus(story, status)).toBeTrue();

    story = {
      status: { id: config.getStatusByName('done').id }
    };

    expect(hasStatus(story, status)).toBeFalse();
  });

});
