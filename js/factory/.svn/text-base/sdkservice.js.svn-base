/*! 
 * sdkservice.js
 * controller v1 by Mateen
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

/* SDK Services */

angular.module('jlrNewsApp.sdkservice', [])

.service('SDKService', function ($timeout,$location) {
    var fileName = 'sdkservice.js';

  ////ciLog(commonObj.APP_NAME,fileName,'global','Localization init');
  CI.Utils.Localization.init();
  ////ciLog(commonObj.APP_NAME,fileName,'global','Localization done');

  var SDKService = this;  
  var status;
  var dlgId;
  
  
  this.tryToLogin = function(toShow,loginResponseHandler,errorHandler)
                        {
                            ////ciLog(commonObj.APP_NAME,fileName,'tryToLogin','tryToLogin call entering');
							var manifest = CI.System.Core.getManifestData();							
                            CI.System.Notifier.sendToCIAppRequest('LOGIN', manifest.id, {uuid:manifest.id, appname: toShow}, 
                            function(data)
                            {
								loginResponseHandler(data);
                            },
                            function(data)
                            {
								errorHandler(data);
                            }
                            );
                            CI.System.Core.removePending(CI.System.Notifier.socketJob);  
                            ////ciLog(commonObj.APP_NAME,fileName,'tryToLogin','tryToLogin call exiting');                          
                        };
  
	this.checkUserLoggedIn = function (fn) {
						//ciLog(commonObj.APP_NAME,fileName,'checkUserLoggedIn','checkUserLoggedIn call entering');
                        CI.Vehicle.Profiles.getActiveUser(
                            function(outputObj)
                                {
                                    if (outputObj.result && outputObj.result['active-user'])
                                    {
                                       fn(outputObj);
                                    }
                                    else
                                    {
										fn(outputObj);
                                    }
                                    
                                },
                            function(error)
                                {
									fn(error);
                                });
						    //ciLog(commonObj.APP_NAME,fileName,'checkUserLoggedIn','checkUserLoggedIn call exiting');
								};
  
   //currentlocation
  this.getCurrentLocation = function (fn,fn1) {
	//ciLog(commonObj.APP_NAME,fileName,'getCurrentLocation','getCurrentLocation entering');
	 if (commonObj.DEMO && commonObj.DEMO === "YES") {        
        var jsonData = {"waypoint":{"waypoint-type":"location","place-id":12,"title":"Shopping point","category":"Shopping","url":"www.shoppingmall.com","phone":"+190298","position":{"latitude":commonObj.MYLOC_LAT?commonObj.MYLOC_LAT:52.1850049,"longitude":commonObj.MYLOC_LONG?commonObj.MYLOC_LONG:-1.467891,"altitude":66.731764},"address":{"street-name":"5th Avenue","house-no":"12","building-name":"Big mall","land-mark":"","postal-code":"10157","city":"New York","county":"","district":"Brooklyn","country":"USA","state":"New York","state-code":"NY","country-code":"+1"}},"async-handle":"550e8400-e29b-41d4-a716-446655444999_ZONE_DRIVER/get_current_location/5"} ; 
        fn(jsonData);
    } else {   
	//added from test application
			CI.Vehicle.Navi.getCurrentLocation( function( outputObj )
                    {
                       var outputStr = '';
					   
						fn(outputObj);
                    },function(error){
					fn1(error);
					});
		}
	//ciLog(commonObj.APP_NAME,fileName,'getCurrentLocation','getCurrentLocation exiting'); 		   
  };
  
  
 //DestinaationplausEta
  this.getDestinationPlusEta=function(fn) {
        //ciLog(commonObj.APP_NAME,fileName,'getDestinationPlusEta','getDestinationPlusEta entering');
		if (commonObj.DEMO && commonObj.DEMO === "YES") {
            //var jsonData = {"waypoint":{"waypoint-type":"location","place-id":12,"title":"Shopping point","category":"Shopping","url":"www.shoppingmall.com","phone":"+190298","position":{"latitude":commonObj.LAT?commonObj.LAT:52.1850049,"longitude":commonObj.LONG?commonObj.LONG:-1.467891,"altitude":66.731764},"address":{"street-name":"5th Avenue","house-no":"12","building-name":"Big mall","land-mark":"","postal-code":"10157","city":"New York","county":"","district":"Brooklyn","country":"USA","state":"New York","state-code":"NY","country-code":"+1"}},"async-handle":"550e8400-e29b-41d4-a716-446655444999_ZONE_DRIVER/get_current_location/5"} ; 

            //var firstJSON = {"Destination": { "waypoint-type":"position","position":{"latitude":12.987199,"longitude":77.731764,"altitude":66.731764}},"time":"hh: 17, mm: 40, ss: 37"};
            var firstJSON = { "waypoint-type":"position","position":{"latitude":commonObj.DEST_LAT?commonObj.DEST_LAT:52.1850049,"longitude":commonObj.DEST_LONG?commonObj.DEST_LONG:-1.467891,"altitude":66.731764}};
            var str = 'Destination: ' + JSON.stringify(firstJSON);

            var destObj={};                                
            destObj['destination']=str;
            destObj['time']="hh: 17, mm: 40, ss: 37";

            fn(destObj);
        } else {
                 CI.Vehicle.Navi.getDestination( function( outputObj )
                    {
						
                        var outputStr = '';
						
                        if (outputObj && !outputObj.error)
                        {
                            outputStr = 'Destination: ' + JSON.stringify(outputObj.waypoint);
                            CI.Vehicle.Navi.getDestinationAndEta(function(outputObj)
                            {
								
                                var outputStrTime = '';
                                if (outputObj && outputObj.eta)
                                {
                                    outputStrTime = JSON.stringify(outputObj.eta);
                                    var destObj={};
								
                                    destObj['destination']=outputStr;
                                    destObj['time']=outputStrTime;
									
									fn(destObj);
                                }
                                else
                                {
                                    outputStr = 'Can not get destination and eta';
									 fn(outputStr);
							   }
                                //showSuccessResultCbk( outputStr );
                            }, console.log(''));
                        }
                        else
                        {
                            outputStr = 'Can not get destination';
                        }
                       // showSuccessResultCbk( outputStr );
                    }, console.log('') );
			}
            //ciLog(commonObj.APP_NAME,fileName,'getDestinationPlusEta','getDestinationPlusEta exiting');
   };
 
  //get connectivity status  
  this.getConnectivityStatus = function(fn) {
            //ciLog(commonObj.APP_NAME,fileName,'getConnectivityStatus','getConnectivityStatus entering');
				try{
                    CI.Utils.Connectivity.getConnectionStatus(function(outputObj) {
						if (outputObj) {
                            fn(outputObj)
                        } else {
                            fn("error");   
                        }
                    },function(outputObj){
					
						fn(outputObj);
					});
                }catch(e){
					fn("error");
                }
            //ciLog(commonObj.APP_NAME,fileName,'getConnectivityStatus','getConnectivityStatus exiting');
  };
  
  this.getCurrentLanguage = function(fn){
    //ciLog(commonObj.APP_NAME,fileName,'getCurrentLanguage','getCurrentLanguage entering');
    //Work Around For languages
    var langArray = {'hiIN':'hi','csCZ':'cs','daDK':'da','elGR':'el','jaJP':'ja','koKR':'ko'};
	CI.System.Core.getCurrentLanguage("TEXT",
		 function(type,data)
		 {
            if(data && data!=="ERROR"){
                var res = data.replace("_","-");
                switch(res){
                   case "hi-IN" :
                   case "hiIN" :
                        res= langArray.hiIN;
                        break;
                   case "cs-CZ":
                   case "csCZ":
                        res = langArray.csCZ;
                        break;
                   case "da-DK":
                   case "daDK":
                        res = langArray.daDK;
                        break;
                   case "el-GR" :
                   case "elGR" :
                        res = langArray.elGR;
                        break;
                   case "ja-JP":
                   case "jaJP":
                        res = langArray.jaJP;
                        break;
                   case "ko-KR":
                   case "koKR":
                        res = langArray.koKR;
                         break;
                   default:
                }
                fn(res);
            }
            else{
                fn("en-GB");
            }
		 });
	  
  };
  
  this.getCurrentActiveUser = function(fn){
    //ciLog(commonObj.APP_NAME,fileName,'getCurrentActiveUser','getCurrentActiveUser entering');
	CI.Vehicle.Profiles.getActiveUser ('192.168.1.1',
	 function (obj)
	 {
		fn(obj);
	 }, function(error)
	 {
		fn(error);
	 });
  };
  
  //CurrentTime
  //@Parms - String 24hr or 12hr
  this.getCurrentTime=function(data) {
    //ciLog(commonObj.APP_NAME,fileName,'getCurrentTime','getCurrentTime entering');
    var currentTime={};
	var time=new Date()
    var hr=time.getHours();
    var min=time.getMinutes();
    if("24hr" === data)
    {
		if (min < 10)
            min = "0" + min;
         
    }
    else if("12hr" === data)
    {
        hr = time.getHours()-12 ;
       if(hr<10)
        hr = "0" +hr;
       if (min < 10)
        min = "0" + min;


    }
    else
    {
         return "Time format is wrong";

    }	
    currentTime['hr']=hr;
    currentTime['min']=min; 
    return  currentTime;
  
  };
  
  /** Description: Function to show the system popup
	  Input Parameters: 
				popupType: Type of the popup [confirm, timer, 2WayDecision]
				poptitle: Popup title
				popMessage: Popup message
				Timer: timer in seconds
				callBackFn: callback function on Yes Button click
	  Return Type: None
  **/		
  this.showPopup = function (param,fn,fn_error) {  
    //ciLog(commonObj.APP_NAME,fileName,'showPopup','showPopup entering');
	var popType = param.popupType || "";
	var poptitle = param.popupTitle || "";
	var popMessage = param.popupMessage || "";
	var timer = param.popupTimer || 0;
	var callBackFn = param.popupCallBkFn || {};
	switch(popType){
	case "confirm":
     //ciLog(commonObj.APP_NAME,fileName,'showPopup','showPopup confirm entering');
		CI.UI.Common.Popups.displayPopup({
                popupType: CI.UI.Common.Popups.HMI_POPUP_TYPE.INFO_CONFIRM,
                popupTitle: poptitle,
                popupText: popMessage,
                btn1: 'OK'
            },
            function (popupId, result) {
				fn(popupId,result)
            },
            function (popupId, isClosed, btnId, btnText) {
				fn_error(popupId,isClosed,btnId,btnText);
            }
        );
		break;
	case "timer":
    //ciLog(commonObj.APP_NAME,fileName,'showPopup','showPopup timer entering');
		var bannerId;		
		CI.UI.Common.Popups.displayPopup({
                popupType: CI.UI.Common.Popups.HMI_POPUP_TYPE.INFO_TIMEOUT,
                popupTitle: poptitle,
				 popupText: popMessage,
                timeout: timer
            },
            function(popupId, result) {
                if(result.status==CI.Utils.Define.HMI_RESPONSE_STATUS.STATUS_SUCCESS) {
                    bannerId = popupId;
                } else {
                }
            }
        );
		break;
	case "2WayDecision":
    //ciLog(commonObj.APP_NAME,fileName,'showPopup','showPopup 2WayDecision entering');
		CI.UI.Common.Popups.displayPopup({
                popupType: CI.UI.Common.Popups.HMI_POPUP_TYPE.DECISION2,
                popupTitle: poptitle,
                popupText: popMessage,
                btn1: CI.Utils.Localization.translate("Yes"),
                btn2: CI.Utils.Localization.translate("No")
            },
            function(popupId, result){
                if(result.status==CI.Utils.Define.HMI_RESPONSE_STATUS.STATUS_SUCCESS){					
                }
            },
            function(popupId, isClosed, btnId, btnText) {
                if(isClosed) {		
					callBackFn(btnId);
                } else {	
					if(btnId === 2) {// Call the call back function for Yes click
						callBackFn(btnId);
					} else {	// Write the call back function for No Click					
						callBackFn(btnId);	
					}
                }
            }
        );
		break;	
	case "removePopup":
		//ciLog(commonObj.APP_NAME,fileName,'showPopup','showPopup removePopup entering');
		CI.UI.Common.Popups.removePopup(dlgId);
		$("#popupFrame").css('display','none');
		break;
	default:
		break;
	}	
  };
  
	  		
	/*Added keyboard on migration for 5.10 */
	 this.useKeyBoard = function(placeholder, callBackFun, bclCalBck, filledMsg)
    {   
		//ciLog(commonObj.APP_NAME,fileName,'useKeyBoard','useKeyBoard entering');
		if (commonObj.sdkVersion && (commonObj.sdkVersion === "5.10")) {

        if (CI.UI.Common.Keyboard.isAvailible()) {
            CI.UI.Common.Keyboard.displayKeyboard("", false,
            function(status, key, enteredString) {
				
                if (status === CI.Utils.Define.JSNIHMICtrl.HMIStatusT.E_STATUS_SUCCESS &&
                    key === CI.Utils.Define.JSNIHMICtrl.HMIKeyT.ENTER_KEY) {
                    if (CI.UI.Common.Keyboard.removeKeyboard)
                        CI.UI.Common.Keyboard.removeKeyboard();
                    //$(textCtrlName).val(enteredString);
                    //$(okCtrlName).trigger('click');
                    callBackFun(enteredString);
                }
                else if(status === CI.Utils.Define.JSNIHMICtrl.HMIStatusT.E_STATUS_REJECTED)
                {
                     // if (CI.UI.Common.Keyboard.removeKeyboard)
                        // CI.UI.Common.Keyboard.removeKeyboard();
					bclCalBck();
				
					//profileManagerApp.onBackButton();
                }
            },placeholder);
        }
		
		} else {

			// SDK 5.12 implementation
        if (CI.UI.Common.Keyboard.isAvailible()) {
            CI.UI.Common.Keyboard.displayKeyboard("", placeholder, filledMsg?filledMsg:"", false,
                function(status, key, msg, removeNative) {
                    if (removeNative == false) {
                        if (status === CI.Utils.Define.JSNIHMICtrl.HMIStatusT.E_STATUS_SUCCESS &&
                            key === CI.Utils.Define.JSNIHMICtrl.HMIKeyT.ENTER_KEY) {

                            if (CI.UI.Common.Keyboard.removeKeyboard) 
                                CI.UI.Common.Keyboard.removeKeyboard();
                            
                               /* if(msg.length < 3){
                                    SDKService.showPopup({
                                    popupType: "timer", // popup type
                                    popupTitle: CI.Utils.Localization.translate("Type_3_Char"), // popup title
                                    popupMessage: CI.Utils.Localization.translate("Type_3_Char"), // popup message
                                    popupTimer: 2, // used only for timer popup
                                    // call back function used in 2WayDecision popup onclick of 
                                });
                                SDKService.useKeyBoard("", callBackFun, bclCalBck, msg);
                            }
                            else{*/
                            
                                callBackFun(msg);        
                          //  }
                            
                        }
                        else if(status !== CI.Utils.Define.JSNIHMICtrl.HMIStatusT.E_STATUS_SUCCESS)
                        {
                            /*
                            if (CI.UI.Common.Keyboard.removeKeyboard)
                                CI.UI.Common.Keyboard.removeKeyboard();
                            */
                            bclCalBck();
                        }
                     }
                     else {
                         if (CI.UI.Common.Keyboard.removeKeyboard)
                            CI.UI.Common.Keyboard.removeKeyboard();
                         bclCalBck();
                     }
                });
        }
		}		
		
    };
	
	
});
