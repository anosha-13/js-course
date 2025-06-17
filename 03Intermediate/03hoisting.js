var num = 2;
function sayMe() {
    console.log("Say Me");
}

sayMe();

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);

}
tipper("80");   //output:85

//use of parseInt : convert string into actual useable number

// bigTipper("200")

// var bigTipper = function (a) {  //bigTipper-->variable
//     var bill = parseInt(a);
//     console.log(bill + 5);
// }
//output: causes an error and says that bigTipper is not a function 


//Function declaration are scanned and made available
//Variable declaration are scanned and made undefined


console.log(name);
var name = "abc";     //output:undefined

function sayName() {
    var name = "def";
    console.log(name);
}
sayName();
console.log(name); //output:abc

