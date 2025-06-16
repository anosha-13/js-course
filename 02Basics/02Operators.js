var num1 = 7;
var num2 = 6;

console.log(num1 + num2);

var answer = num1 > num2;
console.log(answer);

///To calculate Discount////


// D = (L - S) / L * 100
//L-->list price
//S--->selling price

var sellingPrice = 199;
var listPrice = 799;
var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + " %off ");

//+ --->for concatenation purposes

////// TYPE OF operator///
//it shows the data type of a variable

console.log(typeof sellingPrice);
var result = listPrice > sellingPrice;
console.log(typeof result);

//Operator Precedence follows Bodmas rule

//* simple multiplication
// ** power for example : 4*3**2= 4*3^2=4*9=36