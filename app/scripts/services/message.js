'use strict';

angular.module('kamine.app')
  .service('Message', function ($timeout) {
    this.messages = {};
    this.disabled = false;

    this.last = function () {
      var keys = Object.keys(this.messages),
        key = keys[keys.length - 1];

      return this.get(key);
    };

    this.count = function () {
      return Object.keys(this.messages).length;
    };

    this.get = function (key) {
      return this.messages[key];
    };

    this.remove = function (key) {
      if (angular.isDefined(this.messages[key])) {
        delete this.messages[key];
      }
    };

    this.add = function (type, text, values, delay) {
      if (this.disabled) {
        return;
      }

      var key, last = this.last();

      if (angular.isDefined(last)) {
        key = last.key + 1;
      } else {
        key = 0;
      }

      // Check if text is an object with other needed keys (as 'template', or whatever)
      if (angular.isObject(text)) {
        this.messages[key] = text;

        if (angular.isUndefined(this.messages[key].text)) {
          this.messages[key].text = '';
        }
      } else {
        this.messages[key] = {
          text: text,
        };
      }

      this.messages[key].values = values;
      this.messages[key].type = type;
      this.messages[key].key = key;

      // Remove the message after the defined delay
      if (angular.isDefined(delay)) {
        var that = this;

        $timeout(function () {
          that.remove(key);
        }, (delay || 3) * 1000);
      }

      return this.messages[key];
    };

    this.addDanger = function (text, values, delay) {
      return this.add('danger', text, values, delay);
    };

    this.addSuccess = function (text, values, delay) {
      return this.add('success', text, values, delay);
    };

    this.addWarning = function (text, values, delay) {
      return this.add('warning', text, values, delay);
    };

    this.addInfo = function (text, values, delay) {
      return this.add('info', text, values, delay);
    };

    this.enable = function () {
      this.disabled = false;
    };

    this.disable = function () {
      this.disabled = true;
    };

  });
