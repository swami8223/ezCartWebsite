app.controller("HeaderCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory','cacheFactory','userfactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,cacheFactory,userfactory) {

$scope.loggedin = false;
$scope.userName = false;

 var userInfo;

$scope.signupForm =  function(){
$location.path("home");
};
$scope.cartItemTotal = cartFactory.getcartLength();



$scope.checklogin = function(){

userfactory.getuserInfo($scope.sucessUser,$scope.failureuser);

     
}


$scope.sucessUser = function(userData){
	
	if(userData == null ){
		
           
	}else{
		$scope.loggedin = true;
		$scope.userName = userData.Information.UserInfo.FirstName
		 	if(!$scope.$$phase) {
  //$digest or $apply
  $scope.$apply();
}
	}
}
$scope.failureuser = function(userInfo){
	console.log(userInfo);
userfactory.deleteuser();
}


$scope.signout = function(){
userfactory.signout($scope.signoutSucess,$scope.signoutfailure);

}


$scope.signoutSucess = function(){
userfactory.deleteuser();
$scope.loggedin = false;
$scope.userName = null;
 	if(!$scope.$$phase) {
  //$digest or $apply
  $scope.$apply();
}

}


$scope.signoutfailure = function(){

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