//////Use of Switch statement ///////

var user = "testprep";

switch (user) {
    case "admin":
        console.log("U have all the access");
        break;
    case "subadmin":
        console.log("U have access to create and delete courses");
        break;
    case "testprep":
        console.log("U have access to create and delete tests");
        break;
    case "user":
        console.log("U have access to consume contents");
        break;
    default:
        console.log("Trial User");
        
        break;
}