'use strict';

angular.module('kamine.app')
  .service('board', function () {
    this.columns = [{
        name: 'todo',
        statutes: ['todo', 'testko']
      }, {
        name: 'inprogress',
        statutes: ['inprogress']
      }, {
        name: 'totest',
        statutes: ['totest']
      }, {
        name: 'testing',
        statutes: ['testing']
      }, {
        name: 'done',
        statutes: ['done']
      }
    ];
  });
