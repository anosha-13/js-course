//bind: it binds the object , gives a reference back 

const abc = {
    FirstName: "abc",
    LastName: "def",
    role: "Admin",
    courseCount: 3,
    getInfo() {
        console.log(`First Name is : ${this.FirstName}
            Last Name is : ${this.LastName}
            His role is : ${this.role}
            and he is studying courses : ${this.courseCount} courses`);

    },
};

//calling a function

const dj = {
    FirstName: "Rock",
    LastName: "Dj",
    role: "sub-admin",
    courseCount: 4
};

abc.getInfo();   //output: First Name is : abc   Last Name : def   His role is : Admin    and he is studying courses: 3 courses
// dj.getInfo();    //error

var dfinfo= abc.getInfo.bind(dj);

abc.getInfo.call(dj); //if i dont pass anything that means i am passing it to default value

//output: First Name is : Rock
        //   Last Name is : dj    His role is : sub-admin   and he is studying courses: 4 courses