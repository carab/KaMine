'use strict';

describe('Service: state', function () {

  beforeEach(module('kamine.app'));

  var state;
  beforeEach(inject(function ($injector) {
    state = $injector.get('state');
  }));

  it('should have a user object', function () {
    expect(state.user).toBeObject();
  });

  it('should have a sprint object', function () {
    expect(state.sprint).toBeObject();
  });

  it('should have a story object', function () {
    expect(state.story).toBeObject();
  });

  it('should have a project object', function () {
    expect(state.project).toBeObject();
  });

  it('should have a sprints array', function () {
    expect(state.sprints).toBeArray();
  });

  it('should have a stories array', function () {
    expect(state.stories).toBeArray();
  });

  it('should have a projects array', function () {
    expect(state.projects).toBeArray();
  });

});
