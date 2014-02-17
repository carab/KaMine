'use strict';

describe('Filter: hasStatus', function () {

  beforeEach(module('kamine.app'));

  var hasStatus;

  beforeEach(inject(function ($filter) {
    hasStatus = $filter('hasStatus');
  }));

  it('should return true if the story does have the specified status, and false if it does not', function () {
    var story = { id: 1, status: { name: 'todo' } },
      status;

    status = 'todo';
    expect(hasStatus(story, status)).toBeTrue();

    status = 'testko';
    expect(hasStatus(story, status)).toBeFalse();
  });

  it('should also work with an array of statutes', function () {
    var status = ['todo', 'testko'],
      story;
      
    story = { id: 1, status: { name: 'todo' } };
    expect(hasStatus(story, status)).toBeTrue();

    story = { id: 2, status: { name: 'testko' } };
    expect(hasStatus(story, status)).toBeTrue();

    story = { id: 3, status: { name: 'done' } };
    expect(hasStatus(story, status)).toBeFalse();
  });

});
