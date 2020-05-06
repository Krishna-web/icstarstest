import React from "react";
import logo from "./mlogo.jpg"
import  {Link} from 'react-router-dom'



function myFunction()
{
   
  let userData = [
    {
    username:'user1',
    password:'pass1'
    },
    
    {
    username:'user2',
    password:'pass2'
    },
    
    {
    username:'user3',
    password:'pass3'
    }
]
    let username=document.getElementById('eid')
    let password=document.getElementById('pass')
    
    for(let i=0;i<userData.length;i++)
    {
      let username=document.getElementById('eid')
      let password=document.getElementById('pass')
      
      for(let i=0;i<userData.length;i++)
      {
      if(username.value==userData[i].username && password.value==userData[i].password)
    {
    var testVarible=alert("user access granted")
    return
    }
    }
    alert("incorrect")
    }
  }

 function login1(){
   return(
      <div>

        <img src={logo}  width="150" height="150"></img><br/>
        <input id="eid" class= "mail" placeholder="Enter Email" type="text" /><br/><br/>
        <lable id = "error" style={{visibility:"hidden",color:"red"}}>Invalid Email</lable><br/>
        <input id="pass" class= "passw" placeholder="Enter password" type="text" /><br/><br/>
        <lable id = "word" style={{visibility:"hidden",color:"red"}}>Invalid password</lable><br/>
        <button onClick={myFunction} class="button">Log In </button><br/>
        <Link to="/forgot">Forgot password?</Link><br/>
        <Link to="/Register">Register></Link>

        </div>
         );
 }



 export default login1 ;








