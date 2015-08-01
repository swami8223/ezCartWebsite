/*! 
 * service.js
 * service v1 by Naveen
 * Copyright 2014 Tata Elxsi.
 * Review tool used: jslint,dev tool chrome and plugins of sublime and notepad++ editor -->
 * Testing tool used: Karma for unit testing, Protractor for End to End testing
 * Reviewed by  Mateen
 
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

/* Services */

angular.module('jlrWeatherApp.services', ['ngResource'])

.factory('Forecast',['$resource',
	function($resource){

		return $resource('', {}, {
		
		
			
			//To be used for real api 'http://'+commonObj.domainName+'/ad/we/:FileId/'+commonObj.apiVersion+'/json' 
		
			//Hourly data and todays data 
			// queryApiData: {url:'http://'+commonObj.domainName+'/ad/we/today/v1.1/json',method:'GET',params:{},isArray:false},
			
			queryApiData: {url:'https://'+commonObj.domainName+'/ad/we/today/v1.1/json',method:'GET',params:{},timeout:commonObj.timeout,isArray:false},
			
			//Hourly data and todays data 
			/*queryApiData: {url:'ForecastResource/:FileId.json',method:'GET',params:{},timeout:commonObj.timeout,isArray:false},*/
	
			//Can use delta to be asked 
			getETAData:{url:'ForecastResource/:FileId.json',method:'GET',params:{FileId:'DestinationWeatherData'},timeout:commonObj.timeout,isArray:false},
			
			//favorites data not available
			queryFavouriteData: {url:'ForecastResource/:FileId.json',method:'GET',params:{FileId:'FavouriteData'},timeout:commonObj.timeout,isArray:false},
			
			//find list search type 
			queryFindList: {url:'https://'+commonObj.domainName+'/ad/we/locations/v1.1/json/:FileId/',method:'GET',params:{FileId:'FindList'},timeout:commonObj.timeout,isArray:false},
			
			/*queryFindList: {url:'ForecastResource/:FileId.json/:location',method:'GET',params:{FileId:'FindList'},timeout:commonObj.timeout,isArray:false}*/
			
		});
	}]);

