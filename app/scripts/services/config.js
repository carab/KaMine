'use strict';

angular.module('kamineApp')
  .factory('config', function (localStorageService) {
    var defaults = {
      host: 'redmine-projets.smile.fr',
      scheme: 'https',
      port: '',
      limit: 400,
      projects: {
        sort: 'id'
      },
      sprints: {
        tracker: 4, // Feature
        sort: 'id',
        name: 'Sprint #(.+)'
      },
      stories: {
        tracker: 2, // Change
        sort: 'id',
        title: '(.*)'
      },
      statutes: [
        //master: 26, // Status change
        { name: 'todo', id: 17, next: ['inprogress'] }, // Quantified
        { name: 'inprogress', id: 2, next: ['totest'] }, // In progress
        { name: 'totest', id: 18, next: ['testing'] }, // Delivered for internal testing
        { name: 'testing', id: 53, next: ['testko', 'done'] }, // Internal testing in progress
        { name: 'testko', id: 52, next: ['inprogress'] }, // KO on internal testing environement
        { name: 'done', id: 19, next: ['todo', 'inprogress'] } // OK on internal testing environement
      ],
      priorities: [
        { name: 'low', id: 3 }, // Low
        { name: 'normal', id: 4 }, // Normal
        { name: 'high', id: 6 }, // High
        { name: 'immediate', id: 7 } //Immediate
      ],
    };

    var config = angular.copy(defaults);

    /**
     * Retrieve a status by its id
     * @param  {integer} id
     * @return {object}      
     */
    config.getStatusById = function (id) {
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
    config.getStatusByName = function (name) {
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
    config.getPriorityById = function (id) {
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
    config.getPriorityByName = function (name) {
      for (var priority in config.priorities) {
        if (config.priorities[priority].name === name) {
          return config.priorities[priority];
        }
      }
    };

    config.getDefaults = function () {
      return defaults;
    };

    /**
     * Load the configuration from local storage
     */
    config.load = function () {
      angular.extend(config, localStorageService.get('config'));
    };

    /**
     * Save the configuration to local storage
     */
    config.save = function (newConfig) {
      localStorageService.set('config', newConfig);
      config.load();
    };

    config.load();

    return config;
  });
