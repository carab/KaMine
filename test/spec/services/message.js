'use strict';

describe('Service: Message', function () {

  beforeEach(module('kamineApp'));

  var Message;
  beforeEach(inject(function ($injector) {
    Message = $injector.get('Message');
  }));

  it('should create different message type and add it to the list', function () {
    var definitions = [{
      message: 'Danger message',
      method: 'addDanger',
      type: 'danger'
    }, {
      message: 'Warning message',
      method: 'addWarning',
      type: 'warning'
    }, {
      message: 'Info message',
      method: 'addInfo',
      type: 'info'
    }, {
      message: 'Success message',
      method: 'addSuccess',
      type: 'success'
    }];
    
    angular.forEach(definitions, function (definition) {
      var message = Message.addDanger(definition.message);
      expect(message.text).toBe(definition.message);
      expect(message.type).toBe(definition.type);
      expect(Message.messages[message.timestamp]).toBeDefined();
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
    expect(Object.keys(Message.messages).length).toBe(0);
  });

  it('should allow a message to be deleted from the list', function () {
    var message = Message.addDanger('Danger message'),
      timestamp = message.timestamp;

    expect(message.text).toBe('Danger message');
    expect(message.type).toBe('danger');
    expect(Message.messages[timestamp]).toBeDefined();

    message.remove();

    expect(Message.messages[timestamp]).toBeUndefined();
  });

  it('should allow a message to automatically delete after specified delay', function () {
    
  });

});
