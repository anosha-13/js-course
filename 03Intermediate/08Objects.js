var users = {
    firstName: "abc",
    lastName: "def",
    role: "Admin",
    count: 25,
    isLoggedin: true
};

//To access the object we use "." operator 
console.log(users.firstName);  //output: abc

console.log(users["lastName"]);  //output=def

console.log(users.count);      //output:25

users.count = 44;              //Updated value

console.log(users.count);      //output:44







