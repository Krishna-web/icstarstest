import React from "react"
fuction tryToLogIn() {
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
    let username=document.getElementById('userinput')
    let password=document.getElementById('userpassword')
    
    for(let i=0;i<userData.length;i++)
    {
    if(username.value==userData[i].username && password.value==userData[i].password)
    {
    alert("user access granted")
    return
    }
    }
    alert("incorrect")
    }
    
    function javascript(){
    return(
    <div>
    <p>Username</p>
    <input id = "userinput" type="text"/>
    <p>password</p>
    <input id = "userpassword" type="text"/>
    <button onclick="tryToLogIn()">log In </button>
    </div>
    );
    }
    export default javascript;