/*! 
 * app.js
 * Routing functionality ,Run function which triggers on app launch ,event handling functionality , JSon Object to String Function
 * Copyright 2014 Tata Elxsi.
 * Review tool used: jslint,dev tool chrome and plugins of sublime and notepad++ editor -->
 * Testing tool used: Karma for unit testing, Protractor for End to End testing

 * Usage steps below
 * 1. Include this file in index.html

 *
 * Context usage: "News App" 
 */
'use strict';

var app = angular.module( "ezCart", ['ngTouch','ngRoute','ngAnimate','ngDraggable','dcbImgFallback','ui.filters',"checklist-model"] );	
app.config(['$routeProvider',function($routeProvider) {
			$routeProvider

		
				.when('/', {redirectTo: '/home'})


				.when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'HomeCtrl' })
		
                .when('/login', {
				templateUrl: 'partials/login.html',
				controller: 'LoginCtrl' })


				  .when('/products', {
				templateUrl: 'partials/products.html',
				controller: 'ProductCtrl' })
				  
					 .when('/cart', {
				templateUrl: 'partials/cart.html',
				controller: 'CartCtrl' })

					 .when('/login', {
				templateUrl: 'partials/login.html',
				controller: 'LoginCtrl' })

					 		 .when('/signup', {
				templateUrl: 'partials/signUp.html',
				controller: 'LoginCtrl' })
			
			 //RHD & LHD

			
		}]); 
		
		

//Function executes when app launches to initialize the backbutton functionality and capture vehicle status
app.run(function($rootScope) {

$rootScope.domainurl = "http://shoppingcartwebapi.4maven.com/";
angular.element(document).ready(function ($rootScope) {



$rootScope.trimvalue = function(value){

return $.trim(value);

}


    


    });

});	

