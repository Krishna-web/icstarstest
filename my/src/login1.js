import React from "react";

function myFunction()
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
 function login1(){
   return(
      <div>

        <h2>Login</h2>
        <img src="mlogo.jpg"  width="150" height="150"></img><br/>
        <input id="eid" class= "mail" placeholder="Enter Email" type="text" value=""></input><br/><br/>
        <lable id = "error" style="color:red; visibility:hidden;">Invalid Email</lable><br/>
        <input id="pass" class= "passw" placeholder="Enter password" type="text" value=""></input><br/><br/>
        <lable id = "word" style="color:red; visibility:hidden;">Invalid password</lable><br/>
        <button onclick="myFunction()">log In </button>
        <a href="forgot.html" class="link1">Forgot password?</a><br/>
        <a href="register.html"class="link2">Register here</a>
       
        </div>
         );
 }

 export default login1 ;








