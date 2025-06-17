var counter = document.querySelector(".counter"); //you can access .counter.innerhtml anytime
var followers = document.querySelector(".followers");

let count = 1;

//SET INTERVAL: to update value repeatedly in fixed intervals

setInterval(() => {         //to update the value of followers in every 1 milli second if u change the value
    if (count < 1000) {     //conditon is used in IF cuz if it reaches a certain limit it should stop
        count++;
        counter.innerHTML = count;
    }
}, 1)

//SET TIMEOUT: after a certain value the value 

setTimeout(() => {    //when 1000 reaches the message should be displayed as below:followers on instagram..
    followers.innerHTML = "followers on instagram!"
}, 5000)