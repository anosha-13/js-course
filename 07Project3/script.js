const courses = [
    {
        name: "Complete React Js Course",
        price: "2.3"
    },
    {
        name: "Complete Angular Course",
        price: "2.1"
    },
    {
        name: "Complete Next js Course",
        price: "2.7"
    },
    {
        name: "Complete Mern Course",
        price: "2.8"
    },
    {
        name: "Djano Course",
        price: "7.4"
    },
];

//Callback: to do one thing after another


//For each : allows u to go through each and every element of the array , we can't use break or continue in 
// this loop , only works with arrays
//loops over values and uses a callback

{/* < li class="list-group-item" >Complete Mern Course <span class="float-right">$2.8 </span> </li > */ }


function generateList() {
    const ul = document.querySelector(".list-group")
    ul.innerHTML = " "; //clears the exisiting list
    courses.forEach(courses => {
        const li = document.createElement("li")
        li.classList.add("list-group-item", "d-flex", "justify-content-between")
        const name = document.createTextNode(courses.name)
        li.appendChild(name);

        const span = document.createElement("span")
        // span.classList.add("float-right")

        const price = document.createTextNode("$" + courses.price)
        span.appendChild(price);
        li.appendChild(span)
        ul.appendChild(li)
    });
}

// generateList()

window.addEventListener("load", generateList);

//CREATE ELEMENT : used to create new html element dynamically  using js
//Class list : list of tags


//Sort in ascending order//
const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
    courses.sort((a, b) => {
        return a.price - b.price
    })
    generateList();
});


//Sort in descending order//
const button1 = document.querySelector(".sort-btn1")
button1.addEventListener("click", () => {
    courses.sort((a, b) => {
        return b.price - a.price
    })
    generateList();
});

