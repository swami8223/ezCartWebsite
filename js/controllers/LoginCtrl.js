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
				alert('our form is amazing');

    $scope.user.Role = "user"
	userDetails	= serializeData($scope.user)
	apiFactory.DoAjax("POST",login,userDetails,$scope.userloginSucess,$scope.userloginFailure,fomdataContentType);


			}
}





$scope.userloginSucess = function(){

}

$scope.userloginFailure = function(){
	
}



$scope.userSignupsubmit = function(){
		if ($scope.userForm.$valid) {
				alert('our form is amazing');

    $scope.signupUser.Role = "user"
	userDetails	= serializeData($scope.signupUser)
	apiFactory.DoAjax("POST",signup,userDetails,$scope.userloginSucess,$scope.userloginFailure,fomdataContentType);


			}
}



				
				}]) ;
				
				
				
				
