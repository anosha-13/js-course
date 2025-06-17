const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//global object : window

// console.log(window.getComputedStyle(red).backgroundColor);

const getBgcolor =(selectedElement)=>{
return window.getComputedStyle(selectedElement).backgroundColor;
};

var orangeE= console.log(getBgcolor(pink));