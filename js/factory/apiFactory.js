
app.factory('apiFactory', function($http,$location,cacheFactory) {
     
    var apiFactory = {}; 
 
    apiFactory.check = function() {
    	alert("apiFactory")
            //..
        };
     
apiFactory.DoAjax = function(ActionMethod, SubUrl, InputData, SuccessFunction,FailureFunction, ContentType){
	if(InputData == null){
            InputData = "";
        } 
        $http({
            //"Access-Control-Allow-Credentials":true,
            url: domainurl+ SubUrl,
            method: ActionMethod,
            data: InputData,
            headers: { 'Content-Type': ContentType },
            xhrFields: {
                withCredentials: true
            },
        }).success(function(data){
            if(data.Result == 1){
                SuccessFunction(data)
            }
            
            else if(data.Result == 2){
                //$rootScope.signout();
              //  cacheFactory.put('backurl',$location.path());
                //cacheFactory.put('message','Please signin to add to cart');
cacheFactory.backurl = $location.path();
cacheFactory.message = 'Please signin to add to cart';
                $location.path('/login');



            }else if(data.Result == 0){
             errorPopup(data.ErrorList)
            }

            else{
               servererror("Conection failed");
            }
   

        }).error(function (response,data) {
            servererror("response code"+data);
            //CntrlScope.AjaxSuccessResult = null;
        });
}


    apiFactory.method2 = function() {
            //..
        }
 
    return apiFactory;
});