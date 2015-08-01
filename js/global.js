
function unloadPopupBox() {    // TO Unload the Popupbox
            $('#popup_box').fadeOut("slow");
            $("#container").css({ // this is just for style        
                "opacity": "1"  
            }); 

            $(".errorHeading").text("");
            $("#countDown").html("");
}    

  

        function errorPopup(errorlist) {    // To Load the Popupbox
               $(".errorHeading").text("");
            $("#countDown").html("");
            
            var ShowErrorList = ""
            for (x in errorlist){
             
            ShowErrorList = ShowErrorList+  "<li>"+errorlist[x]+"</li>"
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




$(document).ready( function() {

        // When site loaded, load the Popupbox First
   

        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });

     

    });



