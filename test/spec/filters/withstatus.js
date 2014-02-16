'use strict';

describe('Filter: withStatus', function () {

  beforeEach(module('kamineApp'));

  var withStatus,
    stories = [
      { id: 1, status: { name: 'todo' } },
      { id: 2, status: { name: 'testko' } },
      { id: 3, status: { name: 'inprogress' } },
      { id: 4, status: { name: 'totest' } },
      { id: 5, status: { name: 'testing' } },
      { id: 6, status: { name: 'done' } }
    ];

  beforeEach(inject(function ($filter) {
    withStatus = $filter('withStatus');
  }));

  it('should return only the stories with specified status', function () {
    var statutes = 'testko',
      expectedStories = [
        { id: 2, status: { name: 'testko' } }
      ];

    expect(withStatus(stories, statutes)).toEqual(expectedStories);
  });

  it('should also works with an array of statutes', function () {
    var statutes = ['inprogress', 'testko'],
      expectedStories = [
        { id: 2, status: { name: 'testko' } },
        { id: 3, status: { name: 'inprogress' } }
      ];

    expect(withStatus(stories, statutes)).toEqual(expectedStories);
  });

});
