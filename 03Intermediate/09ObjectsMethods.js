var user = {
    firstName: "abc",
    lastName: "def",
    role: "Admin",
    logInCount: 32,
    isLoggedin: true,
    courseList: [],
    buyCourse: function (courseName) {
        //this -->points to current object  meaning in this context this means ---> user.
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("JS course");
console.log(user.getCourseCount());

