app.controller("ReasontoShop",['$scope','$rootScope','$http','$timeout','$location','cartFactory','apiFactory','cacheFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,apiFactory,cacheFactory) {


var CartProduct = {}

$scope.getnewProducts =  function(){



if(cacheFactory.newProduct == null){
	apiFactory.DoAjax("POST",getNewProduct,"",$scope.newproductSucess,$scope.newproductFailure,fomdataContentType);

}else{

	$scope.newproductSucess(cacheFactory.newProduct)
}

}

$scope.newproductSucess = function(data){

$scope.groupUp(data.Products)


//$scope.newProducts = data.Products;
cacheFactory.newProduct = data;
}

$scope.newproductFailure = function(){
	
}


$scope.addtoCart = function(products,event){
		
var itemdiv = angular.element(event.target);
 itemdiv.parents(".wowitembox").addClass("addedToCart");
	cartFactory.addToCart(products);


}

$scope.addgrouptoCart = function(product,event){

var itemdiv = angular.element(event.target);

var groupitem =itemdiv.parents(".wowitembox").find('.groupSelectbox').val()
groupitem= groupitem.split(',')[0];

itemdiv.parents(".wowitembox").addClass("addedToCart");



cartFactory.addToCart(product[groupitem])

}





$scope.groupUp = function(listItem){




   $scope.singleteams ={};
   $scope.productItem = {};
   $scope.groupItem = new Array();
   var groupName = ''

            listItem.forEach(function (item) {
                item.Quantity = 1
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

$rootScope.$on("cartupdated",function(e,product){
	var cartproductName 
	$(".productId"+product.ProductId).removeClass("addingtoCart");
$(".productId"+product.ProductId).addClass("addedToCart");
 
 if(product != undefined && product.ProductName == undefined){
	cartproductName = product[0].ProductName +' added to cart'
 }else{
 	cartproductName = product.ProductName +' added to cart'
 }


showtimerPopup(cartproductName,'')

});










				
				}]) ;