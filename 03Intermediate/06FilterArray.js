//fill :consists of        start & end value   


var testArray = [2, 4, 6, 8, 10, 12, 14];
// console.log(testArray.fill(0));     //output:[0,0,0,0,0,0,0]

// console.log(testArray.fill('h'));   //output:['h','h','h','h','h','h','h'];

// console.log(testArray.fill("h", 2));   //output:[2,4,'h','h','h','h','h','h'];   
//"h"--->  indicates what u want to fill it up with
// 2 ----> indicates start posiiton

//fill the position with h from 2nd index which is 6


console.log(testArray.fill("h", 2, 5));  //output:[2, 4, 'h', 'h', 'h', 12, 14];

//"h"--->  indicates what u want to fill it up with
// 2 ----> indicates start posiiton
// 5-----> indicates end position
//fills the position with h from 2nd index which is 6 and ends till 5th index


//filter: removes the value from the array which u want to remove but uses callback function

const myNumber = [23, 24, 25, 26, 55, 28, 29, 30];
// const result = myNumber.filter((num) => num != 55);
// console.log(result);  //output: [23,24,25,26,28,29,30];
                      //55 is not in the output 

const result = myNumber.filter((num) => num < 55);
console.log(result);  