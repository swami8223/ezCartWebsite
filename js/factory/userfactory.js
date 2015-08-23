
app.factory('userfactory', function($http,$location,cacheFactory,apiFactory) {
     
    var userfactory = {}; 
     userfactory.userInfo ;


userfactory.loginuser = function(userDetaisl){


userfactory.userInfo = userDetaisl.Information.UserInfo;

}
userfactory.currentUserInfo = function(){

}
userfactory.updateUserInfo = function(){

}
userfactory.getuserInfo = function(sucessUser,failureuser){
  
            apiFactory.PostForm("POST",getUserInfo,'',sucessUser,failureuser,fomdataContentType);

  
}
userfactory.signout = function(sucessUser,failureuser){

            apiFactory.PostForm("POST",signout,'',sucessUser,failureuser,fomdataContentType);

  
}


userfactory.deleteuser = function(){
userfactory.userInfo = null;
localStorage.setItem("userInfo", null);
}

     





 
    return userfactory;
});