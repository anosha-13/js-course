console.log(this);       //console.log("this");        output: this  
                                                                // Line7{......

var user = {
    firstName: "abc",
    LastName: "def",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line7", this);

    }
}

user.getCourseCount();

//Output: {}
//        Line 7{
//           firstName:'abc',
//          LastName: ' def',
//         courseCount:4,
//     getCourseCount:[function:getCourseCount]
// }

//Explanation: We are getting this object as a reference back 