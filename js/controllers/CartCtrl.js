app.controller("CartCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory','apiFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,apiFactory) {


var CartProduct = {}

$scope.intializeCart =  function(){
   $scope.cartList = cartFactory.getCartList();
   console.log($scope.cartList)
};


$scope.addtoCart = function(){


CartProduct.ProductList = $scope.cartList.items


//console.log(CartProduct)
//CartProduct=$.param(CartProduct)
		apiFactory.PostForm("POST",addToCart,formParse(CartProduct),$scope.addTocartSucess,$scope.addTocartFailure,fomdataContentType);


}

$scope.addTocartSucess = function(data){

console.log(data);
cartFactory.setserverCartDetails(data.Cart)



	$location.path('/delivery');
	 	if(!$scope.$$phase) {
  //$digest or $apply
  $scope.$apply();
}




}

$scope.addTocartFailure = function(data){
console.log(data);
var errorlist = '';
$.each(data.ErrorList,function(key,errordata){

errorlist += errordata+ '</br>';

})
showtimerPopup('Adding to cart failure',errorlist)



}



				
				}]) ;