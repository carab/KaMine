'use strict';

describe('Service: Story', function () {

  beforeEach(module('kamine.app'));

  var Story,
    config,
    $httpBackend,
    response = {
      issues: [
        { id: 1, status: { id: 17, name: 'this will change' }, priority: { id: 3, name: 'this will change' } },
        { id: 2, status: { id: 2, name: 'this will change' }, priority: { id: 4, name: 'this will change' } },
        { id: 3, status: { id: 18, name: 'this will change' }, priority: { id: 6, name: 'this will change' } }
      ]
    };

  beforeEach(inject(function ($injector) {
    Story = $injector.get('Story');
    config = $injector.get('config');
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.when('GET', config.url + 'issues.json').respond(response);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should query stories and transform the response', function () {
    $httpBackend.expectGET(config.url + 'issues.json');
    var stories = Story.query();
    $httpBackend.flush();

    expect(stories.length).toBe(3);

    angular.forEach(stories, function (story) {
      expect(story.status.name).toBe(config.getStatusById(story.status.id).name);
    });
  });

});
