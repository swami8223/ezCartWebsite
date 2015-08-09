app.controller("LoginCtrl",['$scope','$http','$timeout','$location' ,function( $scope, $http,$timeout,$location) {

			 $scope.email = '';
             $scope.password = '';
	



$scope.loginsubmit = function(){
	if ($scope.userForm.$valid) {
				alert('our form is amazing');
				console.log($scope.user)
			}
}
				
				}]) ;
				
				
				
				
