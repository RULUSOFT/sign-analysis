'use strict';

/**
 * @ngdoc function
 * @name signAnalysisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the signAnalysisApp
 */
angular.module('SignAnalysis').controller('MainCtrl', function($scope, SaveService) {

	$scope.clearData = function() {
		$scope.user = {
			firstName : null,
			lastName : null,
			signature : null,
			email : null
		};
	};
	
	$scope.saveData = function(){
		console.log('Llamo a saveData');
		SaveService.saveUser($scope.user);
		$scope.pp = $scope.user.signature;
	};

});
