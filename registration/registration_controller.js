var myApp= angular.module("myApp");
var RegistrationController = function($scope,$http,DataService,$log) {
	var today = new Date();
	var minAge = 18;
	$scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
	$scope.master = {};
	$scope.isLoggedIn=false;

	$scope.register = function() {
		//Send to http post
		//Show buddy list button
		var data= {	'email':$scope.user.email,
					'password':$scope.user.password,
					'firstname':$scope.user.firstname,
					'lastname':$scope.user.lastname,
					'birthdate':$scope.user.birthdate
		};

		DataService.saveRegistrationForm(data).then(
			function(results){
				//on success
				$log.log("success results.data",results.data);

			},
			function(results){
				//on error
					$log.log("error",results);

			});

		$scope.message = 'Welcome ' + $scope.user.firstname;
		$scope.isLoggedIn=true;

	};

	$scope.reset = function(myForm) {
		if (myForm) {
		  myForm.$setPristine();
		  myForm.$setUntouched();
		}
		$scope.user = angular.copy($scope.master);
	};

	  $scope.reset();
	  $scope.buddyList=function(){

	  	console.log("go to buddy list");
	  }
}


myApp.controller('RegistrationController', RegistrationController);
