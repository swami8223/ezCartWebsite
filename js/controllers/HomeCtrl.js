app.controller("HomeCtrl",['$scope','$http','$timeout','$location' ,'apiFactory',function( $scope, $http,$timeout,$location,apiFactory) {

$scope.customerType="CustomerId";




$scope.signupForm =  function(){
$location.path("home");
};


$scope.init = function(){

$scope.showmenu = "showmenu"; 

}

$scope.init();

				
				}]) ;
				
				
				
				
