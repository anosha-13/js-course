//A method to write classes we can write Export it works completely fine if u write it at the start 

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo() {
        //defining methods
        return { name: this.name, email: this.email }
    }
    enrollCourse(name) {
        this.courseList.push(name);
    }
    getCourseList() {
        return this.courseList;
    }
}

module.exports = User;

