
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

                if(SubUrl == 'Credential/GetInfo'){
                     FailureFunction(data)
                }else{
                    cacheFactory.backurl = $location.path();
                 cacheFactory.message = 'Please signin to add to cart';
                $location.path('/login');
                }




            }else if(data.Result == 0){
             FailureFunction(data)
            }

            else{
                 if(SubUrl == 'Credential/GetInfo'){
                 FailureFunction(data)
                 }else{
                   servererror("Conection failed");
                 }
       
            }
   

        }).error(function (response,data) {
            servererror("response code"+data);
            //CntrlScope.AjaxSuccessResult = null;
        });
}


apiFactory.PostForm = function(ActionMethod, SubUrl, InputData, SuccessFunction,FailureFunction, ContentType){
    if(InputData == null){
            InputData = "";
        } 
$.ajax({
        url: domainurl + SubUrl,
        data: InputData,
        contentType: ContentType,
        type: ActionMethod,
        success: function (data) {
            if (data.Result == 1) {
                SuccessFunction(data)
            }
            else if (data.Result == 2) {
                 if(SubUrl == 'Credential/GetInfo'){
                     FailureFunction(data)
                }else{
                 cacheFactory.backurl = $location.path();
                cacheFactory.message = 'Please signin to add to cart';
                $location.path('/login');
                }
              
            } else if (data.Result == 0) {

                FailureFunction(data);
              
            }
            else {
                servererror("Conection failed");
            }
        },
        error : function (response,data) {
            servererror("response code"+data);
        },
        xhrFields: {
            withCredentials: true
        }
    });
}

    apiFactory.method2 = function() {
            //..
        }
 
    return apiFactory;
});