//Prototype

var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    }
}

var abc = Object.create(User)   //In the parenthesis pass the prototype
console.log(abc);
abc.name = "abc";
abc.getUserName();              //Output: User name is : abc

var sam = Object.create(User, {
    name: { value: "sammy" },
    courseCount: { value: 3 }
})

sam.getUserName();   //User name is : sammy