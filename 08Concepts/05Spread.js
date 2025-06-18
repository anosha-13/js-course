// ...arg--->spread operator


var returnedValue = Math.max(2, 9, 8, 7, 6);
// console.log(returnedValue);       //output:9

var myObject = {}

Object.assign(myObject, { a: 1 }, { b: 2 }, { c: 3 }, { z: 9 }, { x: 8 }, { y: 7 });
// console.log(myObject);     //output: { a:1, b:2 , c:3 , z:9 , x:8 , y:7}



function sumOne(a, b) {
    return a + b;
}
// console.log(sumOne(5, 4));   //output: 9 


myA = [5, 4]
// console.log(sumOne(myA));    //output: 5,4 undefined
// console.log(sumOne(5,4,1));  //output: 9  -->1 is ignored cuz a and b are there as variables


//Spread Operator: expands value into individual elements , breaks apart values

//if u dont want to change the function definition
// console.log(sumOne(...myA));   //output: 9             //Spread Operator


myA = [5, 4, 1]
// console.log(sumOne(...myA));    //output:9



//Rest Operator: packs up values , collects multiple values into one variable
//When u are not sure how many arguments are there so u put ... followed by a variable
// When ... are there array is going to come up
function sumTwo(...args) {
    console.log(args);       //it converts individual value into an array  like (5,10) it becomes: => [5,10]

    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return sum;
}

console.log(sumTwo(5, 10));   //output: 15
console.log(sumTwo(5, 1, 7, 2, 4)); //output: 19          //(5,1,7,2,4) is converted into an array like [5,1,7,2,4]



//Individual arguments:
function sumThree(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum1 = 0;
    for (const arg of args) {
        sum1 = sum1 + arg;
    }
    return [sum1, multi];
}
console.log(sumThree(2, 3, 1, 1, 1));  // 2 and 3 are gonna be ignored cuz we have specified 2 and 3
//output : [1,1,1]  sum is :[3,6]      // Reason : 1+1+1=3 and 2*3=6