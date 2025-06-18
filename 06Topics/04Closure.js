//lexical scoping & closure

function init() {
    var FirstName = "abc";
    console.log("i am init");

    function sayFirstName() {
        console.log(FirstName);
    }
    return sayFirstName;
}

var value = init();   //output: console is empty
// console.log(FirstName);  //undefined
value();

//CLOSURE : function that remembers the variables from its outer scope even after that outer 
// function has finished executing.

//One reference is alive

//it gives a reference
function doAddition(x) {
    return function (y) {
        return x + y;
    }
}
var addition = doAddition(4);
console.log (addition(5));    //output: 9
 
console.log(doAddition(5)(5));  //output:10        //curring
