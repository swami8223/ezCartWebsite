app.controller("SpecialOffer",['$scope','$rootScope','$http','$timeout','$location','cartFactory','apiFactory','cacheFactory',function( $scope,$rootScope,$http,$timeout,$location,cartFactory,apiFactory,cacheFactory) {

$scope.singleOffer = '';


$scope.getOffers =  function(){



if(cacheFactory.specialOffer == null){
	apiFactory.DoAjax("POST",getspecialOffer,"",$scope.newproductSucess,$scope.newproductFailure,fomdataContentType);

}else{

	$scope.newproductSucess(cacheFactory.specialOffer)
}

}



$scope.newproductSucess = function(data){


$scope.offers = data.OfferNames;

//$scope.newProducts = data.Products;
cacheFactory.specialOffer = data;
}

$scope.newproductFailure = function(){
	
}


$scope.getOfferbyId = function(offer){

var offerId = offer.OfferId;

getOffeIdurl = getOfferById+'/'+offerId
  apiFactory.PostForm("POST",getOffeIdurl,"",$scope.OfferIdSucess,$scope.OfferIdFailure,fomdataContentType);

}

$scope.OfferIdSucess = function(data){

var singleoffer = data.Offers
$scope.singleOffer = singleoffer;
$scope.singleOfferName = singleoffer.OfferName;
$scope.singleOfferImage = singleoffer.ImageUrl;
$scope.singleOffer.total = 0;
$scope.singleOffer.Quantity = 1;
$.each($scope.singleOffer.OfferProducts,function(key,value){

$scope.singleOffer.total = $scope.singleOffer.total + value.OfferPrice

})

$('.offerpopUp').show();
  if(!$scope.$$phase) {
  //$digest or $apply
  $scope.$apply();
}
}



$scope.OfferIdFailure = function(){

}

$scope.addOffertoCart = function(){

$('.offerpopUp').hide();
  var offer = $scope.singleOffer;
		
offer.IsOffer = 1;
offer.ProductId = offer.OfferId;
offer.ProductName = offer.OfferName;
offer.Price = offer.total;
if(offer.Quantity == undefined){
  offer.Quantity = 1;
}else{
  offer.Quantity = offer.Quantity+1;
}

cartFactory.addOfferTocart(offer);

}


$scope.closeOffer  = function(){

  $('.offerpopUp').hide();
}


$rootScope.$on("offerupdated",function(e,offer){
  var OfferProductName 
  $(".productId"+offer.ProductId).removeClass("addingtoCart");
$(".productId"+offer.ProductId).addClass("addedToCart");
 
 if(offer != undefined && offer.OfferName == undefined){
  OfferProductName = offer[0].OfferName +' added to cart'
 }else{
  OfferProductName = offer.OfferName +' added to cart'
 }


showtimerPopup(OfferProductName,'')

});








				
				}]) ;