/*! 
 * backButtonFactory.js
 * Copyright 2014 Tata Elxsi.
 * backButtonFactory deals with back button call back and decides the page to be loaded on click of the back button
   fetches data and make it available for respective controllers.
 * Review tool used: jslint,dev tool chrome and plugins of sublime and notepad++ editor -->
 
 * Usage steps below
 * 1. Include this file in index.html

 *
 * Context usage: "JLR Flight Tracker App" 
 */

app.factory('backButtonFactory', ['$location','$rootScope','$timeout',
	function($location,$rootScope,$timeout){
		var backButtonFactory = {};	

		backButtonFactory.backButtonFunctionality = function (){
			var currentUrl=$location.path();
			var newurl;
           if(currentUrl === "/Listing" ){
						newurl = '/';
						 
					}
					if(currentUrl === "/articledetail" ){
						newurl = '/Listing';
					}
					
					if(currentUrl === "/MyNews" ){
						newurl = '/';
					}
					if(currentUrl === "/SavedForLater" ){
						newurl = '/MyNews';
					}
					if(currentUrl === "/AddCategory" ){
						newurl = '/MyNews';
					}
				 if(currentUrl==="/")
			       {
				   return false;
			      }
                  $timeout(function () {
    				$location.path(newurl);
				},0);
				return true;
		}
		
		backButtonFactory.backButtonCallBack = function (){			
		/*Function for handling back button call back*/
			CI.System.Core.setBackKeyCallback (function ()
			{
				return backButtonFactory.backButtonFunctionality();
			});
		} 

	backButtonFactory.backButtonKeyboardCallBack = function(){

	}

	backButtonFactory.setUrlBack = function(previousUrl){
	
	}

	backButtonFactory.getUrlBack = function(previousUrl){
		
	}
	
	$rootScope.$on("$locationChangeSuccess",function(event,newUrl, oldUrl) {
       				 	var previousUrl = oldUrl.substring(oldUrl.indexOf("#")+1, (oldUrl.lastIndexOf("") || oldUrl.lastIndexOf("?")));
       				 	var presentUrl     = newUrl.substring(newUrl.indexOf("#")+1, (newUrl.lastIndexOf("")|| newUrl.lastIndexOf("?")));
       				 	console.log("prev "+previousUrl + "pres " + presentUrl);
   	 }); 

	return backButtonFactory;
}]);