'use strict';

angular.module('kamine.app')
  .factory('config', function (localStorageService) {
    var config = {}, methods = {}, defaults = {
      host: 'redmine-projets.smile.fr',
      scheme: 'https',
      port: '',
      key: '',
      limit: 400,
      projects: {
        sort: 'id'
      },
      sprints: {
        tracker: 4, // Feature
        sort: 'id',
        title: 'Sprint #(.+)'
      },
      stories: {
        tracker: 2, // Change
        sort: 'id',
        title: '(.*)'
      },
      statutes: [
        //master: 26, // Status change
        { name: 'todo', id: 17, next: ['inprogress'] }, // Quantified
        { name: 'testko', id: 52, next: ['inprogress'] }, // KO on internal testing environement
        { name: 'inprogress', id: 2, next: ['totest'] }, // In progress
        { name: 'totest', id: 18, next: ['testing'] }, // Delivered for internal testing
        { name: 'testing', id: 53, next: ['testko', 'done'] }, // Internal testing in progress
        { name: 'done', id: 19, next: ['todo', 'inprogress'] } // OK on internal testing environement
      ],
      priorities: [
        { name: 'low', id: 3 }, // Low
        { name: 'normal', id: 4 }, // Normal
        { name: 'high', id: 6 }, // High
        { name: 'immediate', id: 7 } //Immediate
      ],
    };

    /**
     * Retrieve a status by its id
     * @param  {integer} id
     * @return {object}      
     */
    methods.getStatusById = function (id) {
      for (var status in config.statutes) {
        if (config.statutes[status].id === id) {
          return config.statutes[status];
        }
      }
    };
    
    /**
     * Retrieve a status by its name
     * @param  {string} name
     * @return {object}      
     */
    methods.getStatusByName = function (name) {
      for (var status in config.statutes) {
        if (config.statutes[status].name === name) {
          return config.statutes[status];
        }
      }
    };

    /**
     * Retrieve a priority by its id
     * @param  {integer} id
     * @return {object}      
     */
    methods.getPriorityById = function (id) {
      for (var priority in config.priorities) {
        if (config.priorities[priority].id === id) {
          return config.priorities[priority];
        }
      }
    };
    
    /**
     * Retrieve a priority by its name
     * @param  {string} name
     * @return {object}      
     */
    methods.getPriorityByName = function (name) {
      for (var priority in config.priorities) {
        if (config.priorities[priority].name === name) {
          return config.priorities[priority];
        }
      }
    };

    /**
     * Default configuration
     * @return {object}
     */
    methods.getDefaults = function () {
      return defaults;
    };

    /**
     * Load the configuration from local storage
     */
    methods.load = function () {
      var newConfig = localStorageService.get('config');
      
      if (null === newConfig) {
        newConfig = defaults;
      }

      methods.set(newConfig);
    };

    /**
     * Save the configuration to local storage
     */
    methods.save = function () {
      localStorageService.set('config', config);
    };

    /**
     * Set a new configuration object and add methods to it
     */
    methods.set = function (newConfig) {
      angular.copy(newConfig, config);
      angular.extend(config, methods);
    };

    methods.getParams = function () {
      return {
        scheme: function () { return config.scheme; },
        host: function () { return config.host; },
        port: function () { return config.port; },
        key: function () { return config.key; },
        id: '@id'
      };
    };

    methods.load();

    return config;
  });
