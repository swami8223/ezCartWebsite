app.controller("DeliveryCtrl",['$scope','$rootScope','$http','$timeout','$location','cartFactory','apiFactory','cacheFactory','userfactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,apiFactory,cacheFactory,userfactory) {


var Delivery = {}

	$scope.AddressInfo = new Object();
	 $scope.editAddress = false;
	 var cart ;
	 var order = new Object(); 
	 var AddressInfo = new Object();
	 var total = 0;
	 var promo = new Object();

$scope.initpaymentmode = function(){

$scope.paymentmode = cacheFactory.PaymentModes;

$scope.shippingmode = cacheFactory.ShippingModes
	 	if(!$scope.$$phase) {
  //$digest or $apply
  $scope.$apply();
}
if($scope.paymentmode == undefined){
	$scope.getPaymode();
}

if($scope.paymentmode != undefined){
	$scope.paymode = $scope.paymentmode[0].Status;

}
if($scope.shippingmode != undefined){
	$scope.shipmode = $scope.shippingmode[0].ModeName;
	
}
}


$scope.getPaymode = function(){

if(cacheFactory.PaymentModes == null || cacheFactory.ShippingModes == null){
	apiFactory.PostForm("POST",paymode,'',$scope.paymodeSucess,$scope.paymodefailure,fomdataContentType);

}
	

}

$scope.paymodeSucess = function(data){
console.log(data);
cacheFactory.PaymentModes = data.PaymentModes;
$scope.getShipmode();
}

$scope.paymodefailure = function(data){
console.log(data);
}


$scope.getShipmode = function(){

	apiFactory.PostForm("POST",shipmode,'',$scope.shipmodeSucess,$scope.shipmodeFailure,fomdataContentType);

}


$scope.shipmodeSucess= function(data){
console.log(data);
cacheFactory.ShippingModes = data.ShippingModes;
	$scope.initpaymentmode();	
}
$scope.shipmodeFailure = function(data){
console.log(data);
}


$scope.inituserDetails = function(){

	$scope.UserInfo = userfactory.userInfo;

	if($scope.UserInfo != undefined){
        $scope.editAddress = false;
		$scope.AddressInfo = $scope.UserInfo;

     

	} else{
			$timeout ($scope.inituserDetails,4000);
	}

}

	$scope.initpaymentmode();		
	$scope.inituserDetails();	



$scope.cartDetails = function(){

 cart = cartFactory.getserverCartDetails();
 if(cart != undefined){
 	 $.each(cart.CartProduct,function(index,value){

price =  parseInt(cart.CartProduct[index].Mrp)*parseInt(cart.CartProduct[index].Quantity);
total = total+price;


 })
 } else{


}


if(total == 0){
   	$location.path('/cart');
}else{
	$scope.total = total;

	  $scope.cartList = cartFactory.getCartList();
}


}


$scope.confirmDelivery = function(){


	if($scope.total != undefined){
		order.TotalPrice = $scope.total;
	} else{
       alert("Total price is not updated ")
	} if( $scope.paymode != undefined){
		order.PaymentName =  $scope.paymode;
	}else{
       alert("ShippingMode is not updated ")
	}if( $scope.shipmode != undefined){
         order.ShippingMode =  $scope.shipmode;
	}else{
   alert("ShippingMode is not updated ")
	}if( $scope.AddressInfo != undefined){
		order.AddressInfo = $scope.AddressInfo;
	}else{
         alert("AddressInfo is not updated ")
	}

order.TaxPrice= 0;
order.RedeemPoint = 0;
order.PromoCode = 0;
order.OrderFrom = "web";


console.log(order)


apiFactory.PostForm("POST",delivery,deliveryformParse(order),$scope.deliverySucess,$scope.deliveryFailure,fomdataContentType);

}


$scope.deliverySucess = function(data){


showtimerPopup('Order details',data.Message);


}

$scope.deliveryFailure = function(data){

}



$scope.promoCode = function(){
promo.TotalCost = $scope.total;
promo.PromoCode = $scope.promocode;
 if(promo.PromoCode == undefined || promo.PromoCode == ""){
 	alert("Promocode requires")
 }else{
 	apiFactory.PostForm("POST",promocode,deliveryformParse(promo),$scope.promoSucess,$scope.promFailure,fomdataContentType);

 }


}


$scope.promoSucess= function(data){

var promomessage = "Prmocode is "+data.PromoCodeDetail.PromoCode+""+data.PromoCodeDetail.PromoCode.Description +"DiscountAmount"+ data.PromoCodeDetail.PromoCode.DiscountAmount
showtimerPopup('Order details',promomessage);

}
$scope.promFailure = function(){
 alert("Promocode failed")
}

		$scope.cartDetails();

				}]) ;