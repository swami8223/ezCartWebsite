app.controller("HomeCtrl",['$scope','$http','$timeout','$location' ,'apiFactory','cacheFactory',function( $scope, $http,$timeout,$location,apiFactory,cacheFactory) {

$scope.customerType="CustomerId";




$scope.signupForm =  function(){
$location.path("home");
};


$scope.init = function(){

$scope.showmenu = "showmenu"; 

$scope.getPaymode();
}

$scope.getPaymode = function(){

if(cacheFactory.PaymentModes == null || cacheFactory.ShippingModes == null){
	apiFactory.PostForm("POST",paymode,'',$scope.paymodeSucess,$scope.paymodefailure,fomdataContentType);

}
	

}

$scope.paymodeSucess = function(data){
console.log(data);
cacheFactory.PaymentModes = data.PaymentModes;
$scope.getShipmode();
}

$scope.paymodefailure = function(data){
console.log(data);
}


$scope.getShipmode = function(){

	apiFactory.PostForm("POST",shipmode,'',$scope.shipmodeSucess,$scope.shipmodeFailure,fomdataContentType);

}


$scope.shipmodeSucess= function(data){
console.log(data);
cacheFactory.ShippingModes = data.ShippingModes;

}
$scope.shipmodeFailure = function(data){
console.log(data);
}




$scope.init();

				
				}]) ;
				
				
				
				
