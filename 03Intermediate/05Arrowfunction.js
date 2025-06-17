//we use them without  --->arrow function

function isEven(element) {
    if (element % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isEven(2));   //output: true


//minimal code:

function isEven(element) {
    return element % 2 === 0
}
// console.log(isEven(4));  //output:true


//ARROW FUNCTION:
var isEven = (element) => {
    element % 2 === 0
}
// console.log(isEven(4));  //output:undefined

var isEven = (element) => {
    return element % 2 === 0
}
// console.log(isEven(4)); //output: true cuz of return keyword


//CALLBACK FUNCTION: consists of arguments: number,index,array 
//CALLBACK FUNCTION: doesn't have any name 

//every: looks at every element of the array 
var result = [2, 4, 6, 8].every(isEven);
// console.log(result);   //output:true

var result = [2, 3, 6, 8].every(isEven);
// console.log(result);   //output:false  --->it looks at all the values then gives an answer


//Method of writing callback function
var result = [2, 3, 6, 8].every((e) => {
    return e % 2 === 0;
});
// console.log(result);  //output:false


//OR:
//When using return keyword remove the curly braces when u dont want to return something

var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result); //output:false


