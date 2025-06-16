var user = "null";

if (user) {
    console.log("condition is true");
}

//if we use
 var user = null;
if (user) {
    console.log("condition is true");
}
//output=nothing will be shown on console

var user = "";

if (user) {
    console.log("condition is true");
}
//output=condition is true

// QUESTIONS:
console.log(2 + 2); //output is 4
console.log(2 + "2");//output is 22
console.log("2" + "2");//output is 22


//Double Equals ==  loosely strict
var user = "2";
if (2 == user) {
    console.log("condition is true");
}

//Triple Equals ===  strongly strict checking or type coercion
//the triple equals === operator does not perform type conversion. This means that if you compare a number and a string that have the same value, the == operator will return true, but the === operator will return false.
var user = "2";
if (2 === user) {
    console.log("condition is true");
}