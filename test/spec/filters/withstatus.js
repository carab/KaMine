'use strict';

describe('Filter: withStatus', function () {

  // load the filter's module
  beforeEach(module('kamineApp'));

  // initialize a new instance of the filter before each test
  var withStatus,
    config;
  
  beforeEach(inject(function ($filter, _config_) {
    withStatus = $filter('withStatus');
    config = _config_;
  }));

  it('should return only the stories with specified status', function () {
    var statutes = ['todo', 'testko'],
      stories = [{
        status: { id: config.getStatusByName('todo').id }
      }, {
        status: { id: config.getStatusByName('testko').id }
      }, {
        status: { id: config.getStatusByName('inprogress').id }
      }, {
        status: { id: config.getStatusByName('totest').id }
      }, {
        status: { id: config.getStatusByName('testing').id }
      }, {
        status: { id: config.getStatusByName('done').id }
      }],
      expectedStories = [{
        status: { id: config.getStatusByName('todo').id }
      }, {
        status: { id: config.getStatusByName('testko').id }
      }];

    expect(withStatus(stories, statutes)).toEqual(expectedStories);
  });

});
