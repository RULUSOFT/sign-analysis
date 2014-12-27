'use strict';

/**
 * @ngdoc function
 * @name signAnalysisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the signAnalysisApp
 */
angular.module('SignAnalysis').controller('MainCtrl', function($scope, $interval, SaveService) {

	$scope.clearData = function() {
		$scope.user = {
			firstName : null,
			lastName : null,
			signature : null,
			email : null
		};
	};

	$scope.saveData = function() {
		console.log('Llamo a saveData');
		SaveService.saveUser($scope.user);
	};

	var cons;
	$scope.removeStep = function() {

		if (angular.isDefined(cons))
			return;

		var signature = $scope.user.signature;
		console.log('SIGNATURE: ' + signature.length);
		setTimeout(function() {
			$scope.$apply(function() {
				$scope.user.signature = new Array();
			});
		}, 1000);

		var i = 0;
		cons = $interval(function() {
			updateSignature(signature[i]);
			i++;
			if (signature.length-1 == i){
				$scope.stop();
			}
		}, 500);

	};

	$scope.stop = function() {
		if (angular.isDefined(cons)) {
			$interval.cancel(cons);
			cons = undefined;
		}
	};

	function updateSignature(auxSignature) {
		$scope.user.signature.push(auxSignature);
	}

	function sleep(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) {
				break;
			}
		}
	}

});
