console.log(name);

var name = "abc"; //output: undefined


//if we use the term "LET"

// let name="abc";  //output: error


// if (true) {
//     var lastName = "def";
//     console.log(lastName);   //output: def   
// }
// console.log(lastName); 


if (true) {
    let lastName = "def";
}
console.log(lastName);      //output: error


//WE use let cuz when the loop is finished the scope of "let" is within that block {} block means curly braces only 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }