app.controller("CartCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory','apiFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,apiFactory) {


var CartProduct = {}

$scope.intializeCart =  function(){
   $scope.cartList = cartFactory.getCartList();
   console.log($scope.cartList)
};


$scope.addtoCart = function(){


CartProduct.ProductList = $scope.cartList.items

CartProduct = formParse(CartProduct)
console.log(CartProduct)
//CartProduct=$.param(CartProduct)
		apiFactory.PostForm("POST",addToCart,CartProduct,$scope.addTocartSucess,$scope.addTocartFailure,fomdataContentType);


}

$scope.addTocartSucess = function(data){

console.log(data);

}

$scope.addTocartFailure = function(data){
console.log(data);

}



				
				}]) ;