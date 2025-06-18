const red = document.querySelector(".color-red");
const cyan = document.querySelector(".color-cyan");
const violet = document.querySelector(".color-violet");
const orange = document.querySelector(".color-orange");
const pink = document.querySelector(".color-pink");

const center = document.querySelector(".center");


//global object : window which is created automatically when web page loads

// console.log(window.getComputedStyle(red).backgroundColor);

const getBgcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

//ADD Event listener: when u click on subscribe button that is an event

var orangeElementColor = getBgcolor(orange);


orange.addEventListener('mouseenter', () => {
    center.style.background = orangeElementColor;
})

//Computed Style: when u want to grab the style it gives final result given by browser

// var color = getBgcolor(pink);

// pink.addEventListener('mouseenter', () => {
//     center.style.background = color;
// })

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
};

magicColorChanger(red,getBgcolor(red));
magicColorChanger(cyan,getBgcolor(cyan));
magicColorChanger(violet,getBgcolor(violet));
magicColorChanger(orange,getBgcolor(orange));
magicColorChanger(pink,getBgcolor(pink));