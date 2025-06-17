var getuserRole = function getUserRole(name, role) {

    //arrow function
    // var getuserRole=(name,role)=>{

    // }
    
    switch (role) {
        case "admin":
            return `${name} is admin  with all the access.`;
            break;

        case "sub-admin":
            return `${name} is sub-admin  with access to create and delete courses.`;
            break;

        case "test-prep":
            return `${name} is sub-admin  with access to create and delete tests.`;
            break;

        case "user":
            return `${name} is a user to consume content.`;
            break;

        default:
            break;
    }
}
console.log(getuserRole("abc","user"));
