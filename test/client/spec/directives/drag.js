'use strict';

describe('Directive: drag', function () {

  beforeEach(module('kamine.app'));

  var //element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function () {//function ($compile) {
    /*/element = angular.element('<drag></drag>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the drag directive');/**/
  }));
});
