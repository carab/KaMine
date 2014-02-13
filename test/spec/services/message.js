'use strict';

describe('Service: Message', function () {

  // load the service's module
  beforeEach(module('kamineApp'));

  // instantiate service
  var Message;
  beforeEach(inject(function (_Message_) {
    Message = _Message_;
  }));

  it('should create different message type and add it to the list', function () {
    var message;
    
    message = Message.addDanger('Danger message');
    expect(message.text).toBe('Danger message');
    expect(message.type).toBe('danger');
    expect(Message.messages[message.timestamp]).toBeDefined();

    message = Message.addWarning('Warning message');
    expect(message.text).toBe('Warning message');
    expect(message.type).toBe('warning');
    expect(Message.messages[message.timestamp]).toBeDefined();

    message = Message.addInfo('Info message');
    expect(message.text).toBe('Info message');
    expect(message.type).toBe('info');
    expect(Message.messages[message.timestamp]).toBeDefined();

    message = Message.addSuccess('Success message');
    expect(message.text).toBe('Success message');
    expect(message.type).toBe('success');
    expect(Message.messages[message.timestamp]).toBeDefined();
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

});
