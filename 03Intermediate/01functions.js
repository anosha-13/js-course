function sayHello(name){
    console.log("Hello there,abc");  //output:hello there,abc
    console.log("Hello there,",name); //output:hello there,undefined
}
sayHello();  //output:hello there,abc
sayHello();  //output:hello there,undefined


function sayHello(name){
    console.log("Hello there,abc");  //output:hello there,abc
    console.log("Hello there,",name); //output:hello there,abc
}

sayHello("def");  //output:hello there,def
sayHello("ghi");  //output:hello there,ghi

//By using backtick

function sayHello(name){
    console.log("Hello there,abc");  //output:hello there,abc
    console.log(`Hello there,",${name}`); //output:hello there,abc
}