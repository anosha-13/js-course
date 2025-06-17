const myStates = [
    'abc',
    'def',
    'ghi',
    13,
    'lmn',
    'opq'
];


//while loop//

let i = 0
while (i < myStates.length) {
    console.log(myStates[i]);
    i++;
}                           //output:abc,def,ghi,13,lmn,opq


//do while loop//
let j = 0
do {
    console.log(myStates[j]);
    j++;
} while (j < myStates.length);  //output:abc,def,ghi,13,lmn,opq



// FOR EACH : uses callback function and if u want to return something u can use "return" but 
//also use curly braces

myStates.forEach((s) => (console.log(s)));   //output: abc,def,ghi,13,lmn,opq