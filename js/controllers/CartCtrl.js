app.controller("CartCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory) {




$scope.intializeCart =  function(){
   $scope.cartList = cartFactory.getCartList();
   console.log($scope.cartList)
};


				
				}]) ;