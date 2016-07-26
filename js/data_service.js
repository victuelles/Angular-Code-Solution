(function(){

var myApp= angular.module("myApp")
myApp.factory("DataService",["$http","$log",
	function($http,$log){

		var getBuddyList=function(){
			return $http.get("js/buddyList.json")
			.then(function(response){
				$log.log("getBuddyList response=",response);
				return response.data;
			});
		}
		
		var saveRegistrationForm=function(data){
			return $http.post("/saveForm/",data)
			.then(function(response){
				$log.log("saveRegistrationForm response=",response);
				return response.data;
			});
		}

		return {
			getBuddyList 		 : getBuddyList,
			saveRegistrationForm : saveRegistrationForm
		}

	}]);
}());