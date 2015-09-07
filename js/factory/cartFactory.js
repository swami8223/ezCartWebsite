app.factory('cartFactory',[ '$rootScope','$timeout', function ($rootScope,$timeout,argument) {
	// body...

   var cartFactory = {}

var cart = new Object();
cart.items = new Array();   
cartFactory.cartList = localStorage.getItem("cart");
cartFactory.serverCartDetails ; // cart deatils in server

   cartFactory.addToCart = function(cartproduct){

var cartList = cartFactory.getCartList();
console.log(cartList);


if(cartList != null){
  for(var cartItem = 0; cartItem < cartList.items.length ;cartItem++){

  if(cartList.items[cartItem].ProductId == cartproduct.ProductId){
     cartList.items[cartItem].Quantity = cartList.items[cartItem].Quantity+1;
     //cart.items.push(cartproduct);
cart = cartList;
localStorage.setItem("cart", JSON.stringify(cartList));
  $rootScope.$broadcast('cartupdated', cartproduct)
     return;
  }
}


}
cart.items.push(cartproduct);
cart.itemsLength = cart.items.length;
localStorage.setItem("cart", JSON.stringify(cart));
$rootScope.$broadcast('cartupdated', cartproduct)
};



   
   cartFactory.removeCart = function(){



   };


cartFactory.addOfferTocart = function(offer){

var cartList = cartFactory.getCartList();

if(cartList != null){
  for(var cartItem = 0; cartItem < cartList.items.length ;cartItem++){


  if(cartList.items[cartItem].OfferId == offer.OfferId){
     cartList.items[cartItem].Quantity = cartList.items[cartItem].Quantity+1;
     //cart.items.push(cartproduct);
cart = cartList;
localStorage.setItem("cart", JSON.stringify(cartList));
  $rootScope.$broadcast('offerupdated', offer);
     return;
  }
}

}

cart.items.push(offer);
cart.itemsLength = cart.items.length;
localStorage.setItem("cart", JSON.stringify(cart));
$rootScope.$broadcast('offerupdated', offer)


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


cartFactory.setserverCartDetails = function(cartProduct){


cartFactory.serverCartDetails = cartProduct

} // cart deatils in server



cartFactory.getserverCartDetails = function(){
  return cartFactory.serverCartDetails;
}

  return cartFactory;

}])