'use strict';

describe('Directive: drop', function () {

  beforeEach(module('kamine.app'));

  var //element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function () {//function ($compile) {
    /*/element = angular.element('<drop></drop>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the drop directive');/**/
  }));
});
