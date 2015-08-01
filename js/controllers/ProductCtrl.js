app.controller("ProductCtrl",['$scope','$route','$rootScope','$http','$timeout','$location' ,'apiFactory','cacheFactory','cartFactory',function( $scope,$route,$rootScope, $http,$timeout,$location,apiFactory,cacheFactory,cartFactory) {

$scope.customerType="CustomerId";
$scope.testValue = 'Im not changed yet!';
$scope.sortbrands = {};

$scope.fetchProduct= function(){

var menuId = $route.current.params.menu
$scope.menuName = $.trim($route.current.params.menuName)

apiFactory.DoAjax("POST",getProduct+"/"+menuId,"",$scope.productSucessFunction,$scope.productFailureFunction,fomdataContentType);



}

$scope.productSucessFunction = function(productdata){
$scope.productsdata = productdata.Products;	


//alert("menuSucess");
}

$scope.viewProduct = function(product){

	$scope.singleProductName = product.ProductName;
	$scope.singleProductTamilName = product.TamilName;
	$scope.singleProductBrandName =product.BrandName;
	$scope.singleProductPrice =product.Price;

	$(".popup").css("height",$(document).height()).show();
	$(".backdrop").css("height",$(document).height()).show();




}



$rootScope.$on("cartupdated",function(e,product){

	$(".productId"+product.ProductId).removeClass("addingtoCart");
$(".productId"+product.ProductId).addClass("addedToCart");
});



$scope.closeViewProduct = function(){
	$(".popup").hide();
	$(".backdrop").hide();
}


$scope.productFailureFunction = function(){

}

$scope.addtoCart = function(product,event){
	console.log(product)
// var itemdiv = angular.element(event.target);
// itemdiv.parents(".wowitembox").addClass("addedToCart");

$(".productId"+product.ProductId).addClass("addingtoCart");

   
	cartFactory.addToCart(product)
}



    $scope.sortBrand = function(){

$scope.brandList = ''
        $scope.brandList = $scope.sortbrands.list.join(',');
    }

				
				}]) ;
				
				
				
				
