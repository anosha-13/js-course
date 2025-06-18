// import User from './06Classes';

const User = require("./06Classes");

const abc = new User("abc","abc@gmail.com");

console.log(abc.getInfo());  //output: { name: ' abc' , email: 'abc@gmail.com'}
