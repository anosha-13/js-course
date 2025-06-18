// const user = ["abc", 3, "admin"];

// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user;

// console.log(role);  //output: admin

const MyUser = {
    name: "abc",
    courseCount: 5,
    role: "admin"
}

console.log(MyUser.courseCount);   //output: 5

//How to Destructure?
//type should match names should also match as they are in the object
//in case of objects the name of objects should be same 

const { name, mycourseCount, role } = MyUser;
console.log(mycourseCount);         //output: undefined
console.log(role);                  //output:admin

