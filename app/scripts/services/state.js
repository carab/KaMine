

'use strict';

angular.module('kamine.app')
  .service('state', function ($q, $rootScope, config, User, Project, Story, Sprint, Status, Priority, Tracker, Message) {
    var state = this;

    state.user;
    state.project;
    state.sprint;
    state.story;

    state.projects;
    state.sprints;
    state.stories;

    state.statutes;
    state.priorities;
    state.trackers;

    state.promises = {
      user: $q.when(),
      project: $q.when(),
      sprint: $q.when(),
      story: $q.when(),

      projects: $q.when(),
      sprints: $q.when(),
      stories: $q.when(),

      statutes: $q.when(),
      priorities: $q.when(),
      trackers: $q.when()
    };

    state.loadUser = function (user) {
      var deferred = $q.defer();
      state.promises.user = deferred.promise;

      state.user = User.current();

      state.user.$promise.then(function (d) {
        deferred.resolve(d);
      }, function (d) {
        deferred.reject(d);
      });

      return state.promises.user;
    };

    state.loadProjects = function () {
      var d = $q.defer();
      state.promises.projects = d.promise;

      state.promises.user.then(function (data) {
        state.projects = Project.query({
          "limit": 100
        });

        state.projects.$promise.then(function (data) {
          d.resolve(data);
        }, function (data) {
          d.reject(data);
        });
      }, function (data) {
          d.reject(data);
      });

      return state.promises.projects;
    };

    state.loadSprints = function () {
      var deferred = $q.defer();
      state.promises.sprints = deferred.promise;

      state.promises.project.then(function (d) {
        state.sprints = Sprint.query({
          'project_id': state.project.id
        });

        state.sprints.$promise.then(function (d) {
          deferred.resolve(d);
        }, function (d) {
          deferred.reject(d);
        });
      }, function (d) {
          deferred.reject(d);
      });

      return state.promises.sprints;
    };

    state.loadStories = function () {
      var deferred = $q.defer();
      state.promises.stories = deferred.promise;

      state.promises.sprint.then(function (d) {
        state.stories = Story.query({
          'project_id': state.project.id,
          'parent_id': state.sprint.id
        });

        state.stories.$promise.then(function (d) {
          deferred.resolve(d);
        }, function (d) {
          deferred.reject(d);
        });
      }, function (d) {
          deferred.reject(d);
      });

      return state.promises.stories;
    };

    state.loadStatutes = function () {
      var d = $q.defer();
      state.promises.statutes = d.promise;
      state.statutes = Status.query();

      state.statutes.$promise.then(function (data) {
        d.resolve(data);
      }, function (data) {
        d.reject(data);
      });

      return state.promises.statutes;
    };

    state.loadPriorities = function () {
      var d = $q.defer();
      state.promises.priorities = d.promise;
      state.priorities = Priority.query();

      state.priorities.$promise.then(function (data) {
        d.resolve(data);
      }, function (data) {
        d.reject(data);
      });

      return state.promises.priorities;
    };

    state.loadTrackers = function () {
      var d = $q.defer();
      state.promises.trackers = d.promise;
      state.trackers = Tracker.query();

      state.trackers.$promise.then(function (data) {
        d.resolve(data);
      }, function (data) {
        d.reject(data);
      });

      return state.promises.trackers;
    };

    state.setProject = function (project) {
      var deferred = $q.defer();
      state.promises.project = deferred.promise;

      state.promises.projects.then(function (d) {
        project = state.findProject(project.id);
        if (angular.isDefined(project)) {
          state.project = project;
          deferred.resolve(d);
        } else {
          deferred.reject('project_not_found');
        }
      }, function (d) {
          deferred.reject(d);
      });

      return state.promises.project;
    };

    state.setSprint = function (sprint) {
      var deferred = $q.defer();
      state.promises.sprint = deferred.promise;

      state.promises.sprints.then(function (d) {
        sprint = state.findSprint(sprint.id);

        if (angular.isDefined(sprint)) {
          state.sprint = sprint;
          deferred.resolve(d);
        } else {
          deferred.reject('sprint_not_found');
        }
      }, function (d) {
          deferred.reject(d);
      });

      return state.promises.sprint;
    };

    state.setStory = function (story) {
      var deferred = $q.defer();
      state.promises.story = deferred.promise;

      state.promises.stories.then(function (d) {
        story = state.findStory(story.id);

        if (angular.isDefined(story)) {
          state.story = story;
          deferred.resolve(d);
        } else {
          deferred.reject('story_not_found');
        }
      }, function (d) {
          deferred.reject(d);
      });

      return state.promises.story;
    };

    state.findProject = function (id) {
      for (var index in state.projects) {
        if (state.projects[index].id == id) {
          return state.projects[index];
        }
      }
    };

    state.findSprint = function (id) {
      for (var index in state.sprints) {
        if (state.sprints[index].id == id) {
          return state.sprints[index];
        }
      }
    };

    state.findStory = function (id) {
      for (var index in state.stories) {
        if (state.stories[index].id == id) {
          return state.stories[index];
        }
      }
    };

    state.refresh = function () {
      if (!angular.isString(config.key) || config.key.length === 0) {
        Message.addWarning('message.missingKey');
        return;
      }

      var currentProject = state.project,
          currentSprint = state.sprint;

      state.project = {};
      state.sprint = {};
      state.story = {};

      state.sprints = [];
      state.projects = [];
      state.stories = [];

      state.loadUser();
      state.loadProjects();

      if (angular.isDefined(currentProject)) {
        state.setProject(currentProject);
        state.loadSprints();
      }

      if (angular.isDefined(currentSprint)) {
        state.setSprint(currentSprint);
        state.loadStories();
      }
    };

    // Update the selected project and sprint when the state changes and on page load
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (toParams.project != fromParams.project) {
        state.project = {};
        state.sprint = {};
        state.story = {};

        state.sprints = [];
        state.stories = [];

        state.setProject(new Project({id: toParams.project }));
        state.loadSprints();
      }

      if (toParams.sprint !== fromParams.sprint) {
        state.sprint = {};
        state.story = {};

        state.stories = [];

        state.setSprint(new Sprint({ id: toParams.sprint }));
        state.loadStories();
      }
    });
  });
