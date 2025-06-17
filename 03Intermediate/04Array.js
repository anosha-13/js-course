var countries = ["abc", "def", "ghi"];

var states = new Array("lmn", "opq", "rst");

// console.log(states[1]); //output:opq

// console.log(states.length);  //length of array:3 -->lmn,opq,rst

states[0] = "Punjab";  //output: Punjab,opq,rst
// console.log(states);

var user = ["abc", "abc@gmail.com", 3, 34, true];
// console.log(typeof user);  //output: object


//Purpose of Pop: delete the last value from array 

console.log(user);
user.pop();  //deletes last value in an array 
console.log(user);


//Purpose of unshift: pass value into the argument
//Unshift:adds a value to the beginning in an array 

user.unshift("NEW");
console.log(user);   //output:['NEW','abc','abc@gmail.com',3,34]


//Shift:do not pass anything in the arguments
user.shift();
console.log(user);  //new value is removed when u passed through unshift


//index of: tells the element index or position in an array 
console.log(user.indexOf(3)); // it tells the index of an element in an array 
console.log(user.indexOf("newy"));  //output:-1 it does not exist in the array


//how to convert string into array ?




