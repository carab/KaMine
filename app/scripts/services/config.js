'use strict';

angular.module('kamineApp')
  .factory('config', function () {
    var defaults = {
      url: 'https://redmine-projets.smile.fr/',
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
      statutes: {
        //master: 26, // Status change
        todo: { id: 17, next: ['inprogress'] }, // Quantified
        inprogress: { id: 2, next: ['totest'] }, // In progress
        totest: { id: 18, next: ['testing'] }, // Delivered for internal testing
        testing: { id: 53, next: ['testko', 'done'] }, // Internal testing in progress
        testko: { id: 52, next: ['inprogress'] }, // KO on internal testing environement
        done: { id: 19, next: ['todo', 'inprogress'] } // OK on internal testing environement
      },
      priorities: {
        low: 3, // Low
        normal: 4, // Normal
        high: 6, // High
        immediate: 7 //Immediate
      },
    };

    return defaults;
  });
