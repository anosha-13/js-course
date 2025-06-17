//when we are using range the 1st value is inclusive the end value is exclusive
//means that if the range is from 2 to 5 then value number 2 is included 5 is excluded

//SLICE: takes start and ending value

var users = ["Ted", "Tim", "Tom", "abc", "def"];
// console.log(users.slice(1, 3));   //output:['Tim','Tom']

//Tim lies in index 1 and abc is excluded cuz of the range mentioned 1st value is included last value is
//exlcuded

//Ted = index0
//Tim = index1
//Tom = index2
//abc = index3
//def = index4


//SPLICE:(3,4,"HI")    3--->indicates start value    4-->count

users.splice(1, 2, "Hi");
// console.log(users);  //output: ['Ted','Hi','abc','def']   count index1 & index 2 in this case 
                        //and replace with hi


users.splice(1, 3, "Hi"); 
console.log(users);    //output: ['Ted','Hi']


users.splice(1,3,"Hi","Bye");
console.log(users);    //output: ['Ted','Hi','Bye']

