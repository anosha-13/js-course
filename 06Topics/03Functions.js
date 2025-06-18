var sayHello = function () {
    console.log("hello");
    console.log("i say again hello");
}
sayHello();

//Self executing anonymus function : it should execute by itself and it has no name

(function () {
    console.log("hello");
    console.log("i say again hello");
})();