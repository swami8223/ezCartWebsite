
function unloadPopupBox() {    // TO Unload the Popupbox
            $('#popup_box').fadeOut("slow");
            $("#container").css({ // this is just for style        
                "opacity": "1"  
            }); 

            $(".errorHeading").text("");
            $("#countDown").html("");
}    

  

        function errorPopup(errorlist,message) {    // To Load the Popupbox
               $(".errorHeading").text("");
            $("#countDown").html("");
            
         var ShowErrorList = ""
                if(errorlist == undefined){
        ShowErrorList = message;

                }else{

            for (x in errorlist){
             
            ShowErrorList = ShowErrorList+  "<li>"+errorlist[x]+"</li>"
            }
                }
       
            var counter = 5;
            var id;
            $('#popup_box').fadeIn("slow");
            $("#container").css({ // this is just for style
                "opacity": "0.3"  
            });
            
            id = setInterval(function() {
                counter--;
                if(counter < 0) {
                    clearInterval(id);
                    
                    unloadPopupBox();
                } else {
                    $(".errorHeading").show();
                    $("#countDown").html(ShowErrorList);
                }
            }, 1000);
            
        }  

 function servererror(error) {    // To Load the Popupbox
       $(".errorHeading").text("");
            $("#countDown").html("");
            
          
            var counter = 5;
            var id;
            $('#popup_box').fadeIn("slow");
            $("#container").css({ // this is just for style
                "opacity": "0.3"  
            });
            
            id = setInterval(function() {
                counter--;
                if(counter < 0) {
                    clearInterval(id);
                    
                    unloadPopupBox();
                } else {
                    $(".errorHeading").hide();
                    $("#countDown").html("<h4>Error</h4>"+error);
                }
            }, 1000);
            
        }  
 function sucess(message) {    // To Load the Popupbox
       $(".errorHeading").text("");
            $("#countDown").html("");
            
          
            var counter = 2;
            var id;
            $('#popup_box').fadeIn("slow");
            $("#container").css({ // this is just for style
                "opacity": "0.3"  
            });
            
            id = setInterval(function() {
                counter--;
                if(counter < 0) {
                    clearInterval(id);
                    
                    unloadPopupBox();
                } else {
                    $(".errorHeading").hide();
                    $("#countDown").html("<h4>Success</h4>"+message);
                }
            }, 1000);
            
        }


function showtimerPopup(header,text, timer){

$('#showpopup').fadeIn("slow");
$('#showpopup').find('.header').text(header);
$('#showpopup').find('.htmlcontent').html(text);


setTimeout(function(){
 $('#showpopup').fadeOut("slow");
}, 3000);


}






function serializeData( data ) {
                    // If this is not an object, defer to native stringification.
                    if ( ! angular.isObject( data ) ) {
                        return( ( data == null ) ? "" : data.toString() );
                    }
                    var buffer = [];
                    // Serialize each key in the object.
                    for ( var name in data ) {
                        if ( ! data.hasOwnProperty( name ) ) {
                            continue;
                        }
                        var value = data[ name ];
                        buffer.push(
                            encodeURIComponent( name ) +
                            "=" +
                            encodeURIComponent( ( value == null ) ? "" : value )
                        );
                    }
                    // Serialize the buffer and clean it up for transportation.
                    var source = buffer
                        .join( "&" )
                        .replace( /%20/g, "+" )
                    ;
                    return( source );
                }

function formParse(data){

var formdata = '';
$.each(data,function(key,value){

    console.log(key,value,typeof(value));
    if(typeof value == 'object'){
         
         $.each(value,function(innerkey,innervalue){


           $.each(innervalue,function(formkey,formValue){
       
              formdata += key+'['+innerkey+'].'+formkey+'='+formValue+"&";


           })
         });
    }else{
        formdata += key +'='+ value +'&';

    }


})
console.log(formdata)
 return formdata;
}


$(document).ready( function() {

        // When site loaded, load the Popupbox First
   

        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });

     

    });



