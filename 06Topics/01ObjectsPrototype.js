//Functional way of describing objects


var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course Count is ${this.courseCount}`);
    };
};

//to get First name
User.prototype.getFirstName=function(){
console.log(`Your first name is : ${this.firstName}`);

}

// var abc = User("abc", 4);
// console.log(abc);     //output: undefined


//if we use "NEW " then we can access it
//NEW--->create an instance(object)


var abc = new User("abc", 4);
console.log(abc);    //output: User { firstName:'abc' , courseCount:4 , getCourseCount: [function]}
// console.log(abc.firstName);  //output: abc
abc.getFirstName();     //output: Your first Name is : abc
abc.getCourseCount();   //Course Count is 4

if(abc.hasOwnProperty ("firstName")){
    abc.getFirstName();     //output: Your first name is : abc
}


var sam = new User("sam",2)
// console.log(sam);   //output: User { firstName:'abc' , courseCount:4 , getCourseCount: [function]}
sam.getFirstName();    //Your first name is : sam
sam.getCourseCount();  //Course Count is 2
