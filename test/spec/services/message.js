'use strict';

describe('Service: Message', function () {

  beforeEach(module('kamine.app'));

  var Message, message, $timeout,
    definitions = [{
      message: 'Danger message',
      method: 'addDanger',
      expected: { text: 'Danger message', type: 'danger', key: 0 }
    }, {
      message: 'Warning message',
      method: 'addWarning',
      expected: { text: 'Warning message', type: 'warning', key: 1 }
    }, {
      message: 'Info message',
      method: 'addInfo',
      expected: { text: 'Info message', type: 'info', key: 2 }
    }, {
      message: 'Success message',
      method: 'addSuccess',
      expected: { text: 'Success message', type: 'success', key: 3 }
    }];

  beforeEach(inject(function ($injector) {
    Message = $injector.get('Message');
    message = undefined;
    $timeout = $injector.get('$timeout');
  }));

  it('should return the correct message', function () {
    angular.forEach(definitions, function (definition) {
      Message[definition.method](definition.message);
    });

    angular.forEach(definitions, function (definition) {
      message = Message.get(definition.expected.key);
      expect(message).toEqual(definition.expected);
    });
  });

  it('should count the current number of messages', function () {
    angular.forEach(definitions, function (definition) {
      message = Message[definition.method](definition.message);
    });

    expect(Message.count()).toBe(definitions.length);

    Message.remove(message.key);

    expect(Message.count()).toBe(definitions.length - 1);
  });

  it('should create different message type and add it to the list', function () {
    angular.forEach(definitions, function (definition) {
      message = Message[definition.method](definition.message);
      expect(message).toEqual(definition.expected);

      message = Message.get(definition.expected.key);
      expect(message).toEqual(definition.expected);

      message = Message.last();
      expect(Message.last()).toEqual(definition.expected);
    });
  });

  it('should allow disable or enable new message but enable it by default', function () {
    expect(Message.disabled).toBe(false);

    Message.disable();
    expect(Message.disabled).toBe(true);

    Message.enable();
    expect(Message.disabled).toBe(false);
  });

  it('should not add new message when disabled', function () {
    Message.disable();

    var message = Message.addDanger('Danger message');
    expect(message).toBeUndefined();
    expect(Message.count()).toBe(0);
  });

  it('should allow a message to be deleted from the list', function () {
    angular.forEach(definitions, function (definition) {
      Message[definition.method](definition.message);
    });

    message = Message.get(definitions[1].expected.key);
    expect(message).toEqual(definitions[1].expected);

    Message.remove(message.key);

    message = Message.get(definitions[1].expected.key);
    expect(message).toBeUndefined();
  });

  it('should allow a message to automatically delete when a delay is specified', function () {
    angular.forEach(definitions, function (definition) {
      Message[definition.method](definition.message, 5);
    });

    expect(Message.count()).toBe(definitions.length);

    $timeout.flush();

    expect(Message.count()).toBe(0);
  });

});
