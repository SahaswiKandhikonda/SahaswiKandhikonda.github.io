function dispMessage(){
    // a=10
    // b=20
    // c=a+b
    ///alert(document.getElementById("txtEmail").value)
   //alert("Hello")
   //console.log(hi)
   lblmessage.innerHTML=document.getElementById("txtEmail").value +"-"+ document.getElementById("password").value
    lblmessage1.innerHTML=document.getElementById("txtEmail").value
    //let keyword to create vARIABLE IN java 
     //3 equals are used it checks both type nd value
    let email=document.getElementById("txtEmail").value
    let ps=document.getElementById("password").value
    
    if(email === "sahaswi" && ps === "123"){
        lblmessage.innerHTML="Welcome Sahaswi";
    }
    else{
        lblmessage.innerHTML="Acess denied";
    }
   
}

function showloginform(){
    let str = `
     <h3>Login form</h3>
        <p><label id="lblmessage">Hello Electrical Enginner</label></p>
         <p><input type="text" id="txtEmail" placeholder="Enter Email"></p>
         <p><label id="lblmessage1" ></label></p>
         <p><input type="password" id="password" placeholder=" Enter password"></p>
         <p><button class="login-btn" onclick="dispMessage()">log in</button></p>
         <hr>
         <p><button class="create-btn" onclick="showregform()">Create Account</button></p>
         `
         root.innerHTML = str
}
function showregform(){
    let str=`
    <h3>Registration Form<h3>
         <p><input type="text" id="txtEmail" placeholder="Enter Email"></p>
         <p><input type="password" id="password" placeholder=" Enter password"></p>
          <p><input type>="text" id="txtname" placeholder="Enter Name"></p>
         <p><button class="submit-btn" onclick="dispMessage()">log in</button></p>
         <p><button class="create-btn" onclick="showregform()">Create Account</button></p>
         
    `
     root.innerHTML = str
}