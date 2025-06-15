// Shift
var pets = [ "dog", "cat","bird"];
pets.shift();
document.write(pets);
document.write("<br>" + "<br>");
// UnShift
pets.unshift("fish", "ferret");
document.write(pets);
document.write("<br>" + "<br>");
// Chapter#15-Arrays
// Question#1
// Declare an empty array using JS literal notation to store
// student names in future.
var students = [];
// Question#2
// Declare and initialize a strings array.
var  fruits = [ 'banana' , 'apple'];
document.write(fruits);
document.write("<br>" + "<br>");
// Question#3
// Declare and initialize a numbers array.
const numbers = [ 1 , 2, 3, 4, 5];
document.write(numbers);
document.write("<br>" + "<br>");
// Question#4
// Declare and initialize a boolean array.
const boolean = [ true , false , false , true ];
document.write(boolean);
document.write("<br>" + "<br>");
//  Question#5
// Declare and initialize a mixed array.
var mixed = [ " strings", 112 , true];
document.write(mixed);
document.write("<br>" + "<br>");
// Question#6
//  Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD).
var educate = [ "SSC", 'HSC', 'BCS','BS', 'BCOM',' MS', 'MPhil',' PhD'];
document.write(educate);
document.write("<br>" + "<br>");
// Question#7
// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colors = [" pink", "yellow" , "blue"];
document.write(colors);
document.write("<br>" + "<br>");
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var newColour = prompt(" What Color would You like to Add  in the beginning of an array?");
colors.unshift(newColour);
document.write(colors);
document.write("<br>" + "<br>");
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var colored = [" pink", "yellow" , "blue"];
var newColors = prompt(" What Color would You like to Add  in the end of an array?");
colored.push(newColors);
document.write(colored);
document.write("<br>" + "<br>");
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
var coloredness = ["green", "yellow" , "grey"];
var newColored = prompt(" What  two Color would You like to  Add to the beginning of the array.?");
coloredness.unshift(newColored);
document.write(coloredness);
document.write("<br>" + "<br>");
// d. Delete the first color in the array. Display the updated
// array in your browser.
var companyofcolours = [ " indigo" , 'violet' , 'lilac'];
companyofcolours.shift();
document.write(companyofcolours);
document.write("<br>" + "<br>");
// e. Delete the last color in the array. Display the updated
// array in your browser.
var companyofcoloured = [ 'Maroon','  Ruby','Cherry','Rose'];
companyofcoloured.pop();
document.write(companyofcoloured);
document.write("<br>" + "<br>");
// Question#10
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var studentsScores = [320 ,220 , 480 ,120 ]
studentsScores.sort();
console.log(studentsScores);









                                                         