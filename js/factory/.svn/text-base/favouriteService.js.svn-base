/*! 
 * favouriteService.js
 * service v1 by Varun
 * Copyright 2014 Tata Elxsi.
 * Review tool used: jslint,dev tool chrome and plugins of sublime and notepad++ editor -->
 * Testing tool used: Karma for unit testing, Protractor for End to End testing
 * Reviewed by  Jisha
 
 * Usage steps below
 * 1. Include this file in index.html

 *
 * Context usage: "JLR Weather App" 
 */

/*!
 * Change log
 * V1 : Base code
 
 */
'use strict'; 
angular.module('jlrWeatherApp.favouriteService', [])
.service('FavouriteService',['Forecast',function (Forecast) {
	
	
	//Persisitent value
	var replace = false;
	var current_city="";
	
	//Get favourites from cloud
	this.getFavourites = function(){
		var favouritesData = Forecast.queryFavouriteData();
		return favouritesData;
	}
	
	//Add favourites to  cloud
	this.addFavourites= function(location){
			var  receivedData= Forecast.queryApiData({appId:commonObj.appId,appVersion:commonObj.appVersion,lat:12.987199,long:77.1764,temperatureUnits:commonObj.tempUnit,measurement:commonObj.measurement,includeHourly:true,includeDaily:true,delta:2}); 
			return receivedData;
	};
	
	//delete favourites from cloud
	this.deleteFavourites= function(location){
				var  receivedData= Forecast.queryApiData({appId:commonObj.appId,appVersion:commonObj.appVersion,lat:12.987199,long:77.1764,temperatureUnits:commonObj.tempUnit,measurement:commonObj.measurement,includeHourly:true,includeDaily:true,delta:2}); 
			return receivedData;
	};
	
	//Getter setter for persisitent
	this.getReplace = function(){
		return replace;
	}

	this.setReplace = function(status){
		replace=status;
	}
	
	this.getCity = function(){
		return current_city;
	}
	
	this.setCity = function(city){
		current_city=city;
	}
	
}]);
