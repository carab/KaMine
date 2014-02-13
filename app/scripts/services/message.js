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
      addDanger: function(text) {
        return service.add(text, 'danger', 0);
      },
      addSuccess: function(text) {
        return service.add(text, 'success');
      },
      addWarning: function(text) {
        return service.add(text, 'warning');
      },
      addInfo: function(text) {
        return service.add(text, 'info');
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
