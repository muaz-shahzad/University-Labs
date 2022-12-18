
function validateform(){  
    var fullname=document.reg_form.fullname.value;  
    var email=document.reg_form.email.value;  
    var ph=document.reg_form.ph.value;
    var pwd=document.reg_form.pwd.value;
    var Confirmpwd=document.reg_form.Confirmpwd.value;
      
    if (fullname==""){  
      alert("Please Enter Full Name.");  
       return false;  
    }
    else if (email==null || email==""){  
      alert("Please Enter Email Address.");  
      return false;  
    }
          else if(ph.length>11){
  alert("Phone Number Greater Than 12")
  }
  
    else if(pwd==null || pwd==""){  
      alert("Please Enter Password");  
      return false;  
      }  
      {if(pwd==Confirmpwd){
      return true;
  }else{alert(" Password Must Be Same..! ");return false;}}
  
    }  