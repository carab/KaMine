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

    this.add = function (text, type, delay) {
      if (this.disabled) {
        return;
      }

      var key, last = this.last();

      if (angular.isDefined(last)) {
        key = last.key + 1;
      } else {
        key = 0;
      }

      this.messages[key] = {
        text: text,
        type: type,
        key: key
      };

      if (0 !== delay) {
        var that = this;
        $timeout(function () {
          that.remove(key);
        }, (delay || 3) * 1000);
      }

      return this.messages[key];
    };

    this.addDanger = function (text, delay) {
      return this.add(text, 'danger', delay);
    };

    this.addSuccess = function (text, delay) {
      return this.add(text, 'success', delay);
    };

    this.addWarning = function (text, delay) {
      return this.add(text, 'warning', delay);
    };

    this.addInfo = function (text, delay) {
      return this.add(text, 'info', delay);
    };

    this.enable = function () {
      this.disabled = false;
    };

    this.disable = function () {
      this.disabled = true;
    };

  });
