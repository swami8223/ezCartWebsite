app.controller("CartCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory','apiFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,apiFactory) {


var CartProduct = {}

$scope.intializeCart =  function(){
   $scope.cartList = cartFactory.getCartList();
   console.log($scope.cartList)
};


$scope.addtoCart = function(){


CartProduct.ProductList = $scope.cartList.items
		apiFactory.DoAjax("POST",addToCart,CartProduct,$scope.addTocartSucess,$scope.addTocartFailure,fomdataContentType);


}

$scope.addTocartSucess = function(data){



}

$scope.addTocartFailure = function(){

}



				
				}]) ;