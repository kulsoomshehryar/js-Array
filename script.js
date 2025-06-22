// Chapter#28
// Converting strings to integers and decimals
// ParsInt
let str = "42";
let num = parseInt(str);
console.log(num);
console.log(typeof num);
// ParsFloat()
let str2 = "42.75";
let num2 = parseFloat(str2);
console.log(num2); 
console.log(typeof num2);
// Chapter#29
// Converting strings to numbers, numbers 
// strings
// Number()
let str11 = "100";
let str22 = "99.99";
let num11 = Number(str11);
let num22 = Number(str22);
console.log(num11);
console.log(num22); 
// to.String()
var numberAsNumber = 1234;
 var numberAsString = numberAsNumber.toString();
 console.log(numberAsNumber);
// Chapter#30
// Controlling the length of decimals
// Keep to decimlal places let num = 3.14159;
let number = 3.14159;
let fixed = number.toFixed(2);
console.log(fixed);
//  Keep 0 decimal places:
let numbers = 7.89;
let fixed2 = numbers.toFixed(0);
console.log(fixed2); 
// Chapter#31
// Getting the current date and time
let now = new Date();
let tomorrow = new Date("2025-06-23");
let diff = tomorrow - now;
let hours = Math.floor(diff / (1000 * 60 * 60));
let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
console.log(`${hours} hours ${minutes} minutes`);






