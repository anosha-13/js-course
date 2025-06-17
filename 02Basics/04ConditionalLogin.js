var email = true;
var facebook = false;
var google = false;

if(email==true){
    console.log("log in success");
}
if(facebook==true){
    console.log("login success");
}
if(google==true){
    console.log("login success");
}

//By using Operators: & | 

if(email || facebook || google){
    console.log("Log in success");
}
