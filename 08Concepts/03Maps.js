//maps are not objects

//for of: arrays and maps cuz maps are iterables

//maps: lets u store key value pair where keys can be of any data type

var myMap = new Map();

myMap.set(1, " Uno")
myMap.set(2, " Dos")
myMap.set(3, "Tres")
myMap.set(4, "Quatro")

// console.log(myMap);    //output : Map(4) {1 =>'Uno' , 2 =>'Dos' , '3 => 'Tres' , '4 =>Quatro'}

// for (let value of myMap.values()) {
//     console.log(`Key is ${value}`);
// }                         //output: Key is Uno     Key is Dos     Key is Tres      Key is Quatro


//if u want key value pair together then 
for (let [key, value] of myMap) {
    // console.log(`Key is  : ${key} and the value is ${value}`);  
    //output is :  Key is :1 and the value is Uno    Key is :2 and the value is Dos  
    //Key is :3 and the value is Tres                Key is :4 and the value is Quatro
}

myMap.forEach((key) => console.log(`Key is ${key}`));
//Key is Uno              Key is Dos
//Key is Tres             Key is Quatro

//in this case for each loop is used for values onlu not for indexes so in this case we will use "VALUE" not "key"

myMap.forEach((value) => console.log(`Value is ${value}`)); //same output as above


//If we want key,value both we write them

myMap.forEach((v, k) => console.log(`Value is ${v} and key is ${k}`));  


myMap.delete(2);
console.log(myMap);        //Output: Map(3) { 1 =>'Uno' , 3 =>'Tres' , 4 =>''Quatro'}

