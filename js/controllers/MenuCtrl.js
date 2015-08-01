app.controller("MenuCtrl",['$rootScope','$scope','$http','$timeout','$location' ,'apiFactory','cacheFactory',function($rootScope,$scope, $http,$timeout,$location,apiFactory,cacheFactory) {

$scope.customerType="CustomerId";

$scope.fetchMenu= function(){


if(cacheFactory.menudata == null){

apiFactory.DoAjax("POST",getCompleteMenu,"",$scope.menuSucessFunction,$scope.menuFailureFunction,fomdataContentType);
}

else{

	$scope.menuSucessFunction(cacheFactory.menudata)
}

}

$scope.menuSucessFunction = function(menudata){
$scope.menudata = menudata.Menu;	

cacheFactory.menudata = menudata

//alert("menuSucess");


}


$scope.menuFailureFunction = function(){

}


$scope.navigateProduct = function(menuId){

	$location.path("products/"+menuId)

}





				
				}]) ;
				
				
				
				
