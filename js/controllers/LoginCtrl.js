app.controller("LoginCtrl",['$scope','$http','$timeout','$location','apiFactory','cacheFactory','userfactory' ,function( $scope, $http,$timeout,$location,apiFactory,cacheFactory,userfactory) {

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
	apiFactory.PostForm("POST",login,userDetails,$scope.userloginSucess,$scope.userloginFailure,fomdataContentType);


			}
}





$scope.userloginSucess = function(data){
// userfactory.userInfo = data.Information.UserInfo ;
// userfactory.loginUser(data.Information.UserInfo )
 userfactory.loginuser(data)
 if(cacheFactory.backurl == '/login'){
$location.path('/cart');
 	if(!$scope.$$phase) {
  //$digest or $apply
  $scope.$apply();
}
 }
 else if(cacheFactory.backurl != undefined && cacheFactory.backurl != false){
 	$location.path(cacheFactory.backurl);

 	if(!$scope.$$phase) {
  //$digest or $apply
  $scope.$apply();
}
 }else{
$location.path("/home");

 }




}

$scope.userloginFailure = function(data){
	console.log(data)
	showtimerPopup(data.Message,'')
	
}



$scope.userSignupsubmit = function(){
		if ($scope.userForm.$valid) {
		

    $scope.signupUser.Role = "user"
	userDetails	= serializeData($scope.signupUser)
	apiFactory.PostForm("POST",signup,userDetails,$scope.usersignupSucess,$scope.usersignupFailure,fomdataContentType);


			}
}



$scope.usersignupSucess = function(data){

 userfactory.loginuser(data)
 if(cacheFactory.backurl != undefined && cacheFactory.backurl != false){
 	$location.path(cacheFactory.backurl);
 }else{
$location.path("/home");

 }


}

$scope.usersignupFailure = function(data){
showtimerPopup(data.Message,'')
if(data.Message == "Email Id Alredy Exist"){
	$scope.signupUser.Email_Id = "";
}
if(data.Message == "<br>Invalid Mobile No"){
	$scope.signupUser.MobileNo = "";
}

   
}

				
				}]) ;
				
				
				
				
