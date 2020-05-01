   function javascript()
    {
       
        var uname=document.getElementById("eid");
        var pass=document.getElementById("pass");
    
    if(uname.value.trim()=="")
        
        {
           
           uname.style.border = "solid 3px red";
           document.getElementById("error").style.visibility="visible";
           return false;
           
        }
     else if (pass.value.trim()=="")
     {
         //alert("Blank password");
           pass.style.border = "solid 3px red";
           document.getElementById("word").style.visibility="visible";
           return false;
        
     }
     else if(pass.value.trim().length<5)
     {
         alert("password too short");
         return false;
     }
     else
     {
        return true;
     }
      
    }
    










