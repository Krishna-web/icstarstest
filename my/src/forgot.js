import React from 'react';
import logo from "./logo.jpg"
function forgot(){
    return(
       <div>
 
 <img src={logo}  width="150" height="150"></img><br/>
    <h2>Forgotten your password?</h2>
    <pre>Don't worry we'll send you a message to
    help you reset your password
    </pre>
    <input id="eid" class= "mail" placeholder="Enter Email" type="text"/><br/><br/>
    <button class="button" type="submit">continue</button><br/><br/>
 
         </div>
          );
  }
 
export default forgot;