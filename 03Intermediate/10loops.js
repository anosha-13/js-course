//for loops 

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

const myStates = [
    'abc',
    'def',
    'ghi',
    13,
    'lmn',
    'opq'
];

for (let i = 0; i < myStates.length; i++) {
    // console.log(myStates[i]);   //output: abc,def,ghi,13,lmn,opq
    if (typeof myStates[i] !== "string") 
        continue;
        console.log(myStates[i]);
}   //output: all the alphabets except numbers numbers are not added in the list



