'use strict';

describe('Service: Save', function () {

  // load the service's module
  beforeEach(module('signAnalysisApp'));

  // instantiate service
  var Save;
  beforeEach(inject(function (_Save_) {
    Save = _Save_;
  }));

  it('should do something', function () {
    expect(!!Save).toBe(true);
  });

});
