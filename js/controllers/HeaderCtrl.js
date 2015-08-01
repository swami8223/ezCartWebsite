app.controller("HeaderCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory) {



$scope.signupForm =  function(){
$location.path("home");
};
$scope.cartItemTotal = cartFactory.getcartLength();



$rootScope.$on("cartupdated",function(e,product){

$scope.cartItemTotal = cartFactory.getcartLength();
 

});
				
				}]) ;