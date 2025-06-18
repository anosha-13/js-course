// var name="abc";


// backtick ` `are known as string literal

var name = `abc`;
var fullName = `${name} def `;

console.log(fullName);  //output: abc def
console.log(fullName.charAt(0));   //output: a     -->charAt: character At 
console.log(fullName.endsWith("?"));  //output: false
console.log(fullName.includes("abc"));  //output:true
console.log(fullName.toUpperCase());   //output: ABC DEF


