$(function(){

    $('#login').click(function(){     
        var email = $("#exampleInputEmail").val();
        var password = $("#exampleInputPassword").val();
          
          if ((email == 'admin@nw.com') && (password == '12345')) {
             
                  window.location = "dashboard.html";
              
          } else {
              if ((email == "") && (password == "")) {
                  alert("กรุณากรอก Eamil And Password");
                  $("#exampleInputEmail").focus();
              } else if (email == "") {
                  alert("กรุณากรอก Email");
                  $("#exampleInputEmail").focus();
              } else if (password == "") {
                  alert("กรุณากรอก Password");
                  $("#exampleInputPassword").focus();
              } else  {
                  alert("Email หรือ Password ไม่ถูกต้อง");
                 
              }
            }
    });

   
});