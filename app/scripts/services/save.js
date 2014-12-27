'use strict';

/**
 * @ngdoc service
 * @name signAnalysisApp.Save
 * @description
 * # Save
 * Service in the signAnalysisApp.
 */
angular.module('SignAnalysis')
  .service('SaveService', function () {
  	
  	this.saveUser = function(user){
  		console.log(user);
  	};

  });
