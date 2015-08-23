app.controller("HeaderCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory','cacheFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,cacheFactory) {

$scope.loggedin = false;
$scope.userName = false;

 var userInfo;

$scope.signupForm =  function(){
$location.path("home");
};
$scope.cartItemTotal = cartFactory.getcartLength();



$scope.checklogin = function(){

userInfo = cacheFactory.userInfo
	if(userInfo == null ){
		
           
	}else{
		$scope.loggedin = true;
		$scope.userName = userInfo.FirstName
	}
     
}


$scope.navtoLogin = function(){

	cacheFactory.backurl = $location.path();
	$location.path("/login");
}

$scope.navtouserProfile = function(){
	alert("yet to come")
}



$rootScope.$on("cartupdated",function(e,product){

$scope.cartItemTotal = cartFactory.getcartLength();
 

});
				
				}]) ;