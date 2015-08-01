/*! 
 * refreshService.js
 * controller v1 by varun
 * Copyright 2014 Tata Elxsi.
 * Review tool used: jslint,dev tool chrome and plugins of sublime and notepad++ editor -->
 * Testing tool used: Karma for unit testing
 * Reviewed by Varun
 
 
 * Usage steps below
 * 1. Include this file in index.html

 * Context usage: "JLR Weather App" 
 */

/*!
 * Change log
 * V1 : Base code
 */
'use strict';  
 
var refreshData;
angular.module('jlrWeatherApp.refreshService', [])

.service('refresh', function ($timeout,$location,$route) {

	this.refreshFeed = function(){ 
	$timeout(function() {
	if($location.path() === "/Jlr_Current_temperature")
	{refreshData=true;$route.reload();}
	else{refreshData=true;}},commonObj.autoRefreshTimeOut)};

});