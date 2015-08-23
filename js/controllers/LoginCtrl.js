app.controller("LoginCtrl",['$scope','$http','$timeout','$location','apiFactory','cacheFactory' ,function( $scope, $http,$timeout,$location,apiFactory,cacheFactory) {

			 $scope.email = '';
             $scope.password = '';
	$scope.user = '';
	$scope.signupUser = {}
	$scope.signupUser.Gender = 'FeMale'


  var userDetails = {};



$scope.initLogin = function(){
if(cacheFactory.message!= null){
showtimerPopup(cacheFactory.message,'')
       cacheFactory.message = null;
}


}

$scope.initLogin();

$scope.userloginsubmit = function(){
	if ($scope.userForm.$valid) {

    $scope.user.Role = "user"
	userDetails	= serializeData($scope.user)
	apiFactory.DoAjax("POST",login,userDetails,$scope.userloginSucess,$scope.userloginFailure,fomdataContentType);


			}
}





$scope.userloginSucess = function(data){
 cacheFactory.userInfo = data.Information.UserInfo 
 if(cacheFactory.backurl != undefined && cacheFactory.backurl != false){
 	$location.path(cacheFactory.backurl);
 }else{
$location.path("/home");

 }




}

$scope.userloginFailure = function(data){
	console.log(data)
	
}



$scope.userSignupsubmit = function(){
		if ($scope.userForm.$valid) {
		

    $scope.signupUser.Role = "user"
	userDetails	= serializeData($scope.signupUser)
	apiFactory.DoAjax("POST",signup,userDetails,$scope.usersignupSucess,$scope.usersignupFailure,fomdataContentType);


			}
}



$scope.usersignupSucess = function(data){
 cacheFactory.userInfo = data.Information.UserInfo 
 if(cacheFactory.backurl != undefined && cacheFactory.backurl != false){
 	$location.path(cacheFactory.backurl);
 }else{
$location.path("/home");

 }


}

$scope.usersignupFailure = function(message){
showtimerPopup(message,'')
if(message == "Email Id Alredy Exist"){
	$scope.signupUser.Email_Id = "";
}
if(message == "<br>Invalid Mobile No"){
	$scope.signupUser.MobileNo = "";
}

   
}

				
				}]) ;
				
				
				
				
