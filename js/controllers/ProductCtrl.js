app.controller("ProductCtrl",['$scope','$route','$rootScope','$http','$timeout','$location' ,'apiFactory','cacheFactory','cartFactory',function( $scope,$route,$rootScope, $http,$timeout,$location,apiFactory,cacheFactory,cartFactory) {

$scope.customerType="CustomerId";
$scope.testValue = 'Im not changed yet!';
$scope.sortbrands = {};





$scope.groupUp = function(listItem){




   $scope.singleteams ={};
   $scope.productItem = {};
   $scope.groupItem = new Array();
   var groupName = ''

            listItem.forEach(function (item) {

				if (item.GroupName == null || item.GroupName === undefined || item.GroupName == '') {
 				groupName = item.ProductName;

					}else{

					groupName = item.GroupName;
                    }
                 if( $scope.groupItem[groupName] != undefined){

    // already exisit
               $scope.groupItem[groupName].push(item);
 
    				}else{
            
  
                    $scope.groupItem[groupName] = new Array();
                    $scope.groupItem[groupName].push(item);

    			}


            });  


$scope.productItem = new Array()

for (var key in $scope.groupItem) {
  if ($scope.groupItem.hasOwnProperty(key)) {
    $scope.productItem.push($scope.groupItem[key]);
  }
}


}


$scope.fetchProduct= function(){

var menuId = $route.current.params.menu
$scope.menuName = $.trim($route.current.params.menuName)

apiFactory.DoAjax("POST",getProduct+"/"+menuId,"",$scope.productSucessFunction,$scope.productFailureFunction,fomdataContentType);



}

$scope.productSucessFunction = function(productdata){
$scope.productsdata = productdata.Products;	
$scope.groupUp(productdata.Products)

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
 
var cartproductName = product.ProductName +' added to cart'

showtimerPopup(cartproductName,'')

});



// $scope.changeItem = function(product,index){

// var selectitemdiv = angular.element(event.target);
// var selectgroupitem =selectitemdiv.parents(".wowitembox").find('.groupSelectbox').val();

// // alert(selectgroupitem)
// }


$scope.closeViewProduct = function(){
	$(".popup").hide();
	$(".backdrop").hide();
}


$scope.productFailureFunction = function(){

}

$scope.addtoCart = function(product,event){
	console.log(product)
var itemdiv = angular.element(event.target);
 itemdiv.parents(".wowitembox").addClass("addedToCart");

//$(".productId"+product.ProductId).addClass("addingtoCart");

   
	cartFactory.addToCart(product[0])
}



$scope.addgrouptoCart = function(product,event){

var itemdiv = angular.element(event.target);

var groupitem =itemdiv.parents(".wowitembox").find('.groupSelectbox').val()
groupitem= groupitem.split(',')[0];

itemdiv.parents(".wowitembox").addClass("addedToCart");



cartFactory.addToCart(product[groupitem])

}



$scope.selectQTy = function(product){
// $(".productId"+product.ProductId).addClass("addingtoCart");

$scope.selectQty = true;

}




    $scope.sortBrand = function(){

$scope.brandList = ''
        $scope.brandList = $scope.sortbrands.list.join(',');
    }

				
				}]) ;
				
				
				
				
