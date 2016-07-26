var myApp= angular.module("myApp");
var BuddylistController = function($scope,$http,DataService,friends) {
	var vm=this;
	vm.editing=false;

	$scope.editItem={};
	$scope.avatars = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg"];

	$scope.friends=friends;

	console.log('$scope.friends',$scope.friends);


	$scope.deleteFriend = function(friend) {
 		var index=$scope.friends.indexOf(friend);

        $scope.friends.splice(index,1);
    }

    $scope.create = function() {

		$scope.editing=true;
		$scope.setDefaults();
		console.log('create');

    }
    $scope.cancel = function() {

		$scope.editing=false;
		console.log('cancel');

    }
	 $scope.save = function() {

 	console.log('save');
 	console.log($scope.editItem.avatar,$scope.editItem.first_name,$scope.editItem.last_name);

		$scope.friends = $scope.friends.concat([
		    { avatar : $scope.editItem.avatar,
		      first_name:$scope.editItem.first_name,
		      last_name:$scope.editItem.last_name 
		 	}
		  ]);

       $scope.setDefaults();
       $scope.editing = false;
      
    }
    
   $scope.cancel = function() {
       $scope.setDefaults();
       $scope.editing = false;
    }

    $scope.setDefaults = function() {
      $scope.editItem.avatar = '';
      $scope.editItem.first_name = '';
      $scope.editItem.last_name = '';
 
    }
     $scope.setDefaults();
}


myApp.controller('BuddylistController', BuddylistController);
