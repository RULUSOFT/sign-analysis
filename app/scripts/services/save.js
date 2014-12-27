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
  		window.localStorage[user.firstName] = JSON.stringify(user);
  		var userRecuperado = JSON.parse(window.localStorage[user.firstName]);
  		console.log(userRecuperado.lastName);
  	};

  });
