//For of loop: only used for array to iterate through array 

const names = [
    "Youtube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon"
];

for (const n of names) {
    console.log(n);
}     //output: Youtube,facebook,instagram,netflix,amazon



//For in loop: only used for objects

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    nt: "Netflix",
    an: "Amazon"
}

for (const n in symbols) {
    console.log(n);      //output:yt,ig,fb,nt,an
    console.log(`Key is ${n}`);      //output:Key is yt, key is ig,key is fb,key is nt,key is an
}


