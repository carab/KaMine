'use strict';

angular.module('kamineApp')
  .service('Loader', function Loader() {
    var service = {
      active: false,
      enabled: true,
      counter: 0,
      activate: function() {
        service.counter++;

        if (service.enabled) {
          service.active = true;
        }
      },
      deactivate: function(force) {
        service.counter--;

        if (service.enabled) {
          if (force || 0 === service.counter) {
            service.active = false;
          }
        }
      },
      disable: function() {
        service.enabled = false;
      },
      enable: function() {
        service.enabled = true;

        if (0 === service.counter) {
          service.active = false;
        }
      }
    };

    return service;
  });
