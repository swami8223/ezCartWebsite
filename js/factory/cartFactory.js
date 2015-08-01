app.factory('cartFactory',[ '$rootScope','$timeout', function ($rootScope,$timeout,argument) {
	// body...

   var cartFactory = {}
var cart = new Object();
cart.items = new Array();   
cartFactory.cartList = localStorage.getItem("cart");

   cartFactory.addToCart = function(cartproduct){

cart.items.push(cartproduct);
cart.itemsLength = cart.items.length;


$timeout(function() {
localStorage.setItem("cart", JSON.stringify(cart));
	$rootScope.$broadcast('cartupdated', cartproduct)
},5000);





   };
   
   cartFactory.removeCart = function(){

   };

   cartFactory.getcartLength = function(){

  cartFactory.cartList = JSON.parse(localStorage.getItem("cart"));
  if(cartFactory.cartList != undefined){
    return cartFactory.cartList.itemsLength;
  }
   	else{
      return 0;
    }
      
   };
    cartFactory.getCartList = function(){
  cartFactory.cartList = JSON.parse(localStorage.getItem("cart"));
        return cartFactory.cartList


   };
   cartFactory.emptyCart = function(){

   }; 

  return cartFactory;

}])