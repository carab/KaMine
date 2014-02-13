'use strict';

angular.module('kamineApp')
  .service('Config', function Config() {
    this.defaults = {
      url: 'https://redmine-projets.smile.fr/',
      maxItems: 0,
      sprints: {
        tracker: 4, // Feature
        name: 'Sprint #(.+)'
      },
      stories: {
        tracker: 2, // Change
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
  });
