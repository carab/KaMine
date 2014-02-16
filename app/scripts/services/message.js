'use strict';

angular.module('kamineApp')
  .factory('Message', function ($timeout) {
    var service = {
      messages: {},
      disabled: false,
      add: function(text, type, delay) {
        if (service.disabled) {
          return;
        }

        var timestamp = (new Date()).getTime();

        service.messages[timestamp] = {
          text: text,
          type: type,
          timestamp: timestamp,
          remove: function() {
            delete service.messages[timestamp];
          }
        };

        if (0 !== delay) {
          $timeout(function() {
            if (angular.isDefined(service.messages[timestamp])) {
              service.messages[timestamp].remove();
            }
          }, (delay || 3) * 1000);
        }

        return service.messages[timestamp];
      },
      addDanger: function(text, delay) {
        return service.add(text, 'danger', delay);
      },
      addSuccess: function(text, delay) {
        return service.add(text, 'success', delay);
      },
      addWarning: function(text, delay) {
        return service.add(text, 'warning', delay);
      },
      addInfo: function(text, delay) {
        return service.add(text, 'info', delay);
      },
      enable: function() {
        service.disabled = false;
      },
      disable: function() {
        service.disabled = true;
      }
    };

    return service;
  });
