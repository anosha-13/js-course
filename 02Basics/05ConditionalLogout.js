var authenticated= true;

if(authenticated){
    console.log("Show log out button");
}
else{
    console.log("Show sign up button");
   
}
//You can also use ! for showing false in this case 
// if(!authenticated){
//     console.log("Show log out button");
// }
// else{
//     console.log("Show sign up button");
   
// }
//Output=false;

//Ternary operator: Two cases: false & true
//1st is written the false case then true case

authenticated?console.log("SignOut button"):console.log("SignUp button")
//or//
authenticated?true:false
console.log(authenticated);


