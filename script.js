// arrays
const Cities = ["Karachi" , " Multan" , "Lahore"];
document.write(Cities);
document.write("<br>" + "<br>");
const cars = []
cars [0]= "BMW";
cars [1]= "Volvo";
cars [2]= "Suzuki";
document.write(cars);
document.write("<br>" + "<br>");
document.write (cars[1]);
document.write("<br>" + "<br>");
var info = ["Kulsoom" , "15", "BahriaCollegeKarsaz", "Thats True"]
document.write(info);
document.write("<br>" + "<br>");
info[6] = "Wow"
document.write(info);
document.write("<br>" + "<br>");
const vegetables = ["Tomato" , " Potato" , " Onion"];
// change all the elements into strings "toString()"
const myList = vegetables.toString();
document.write(myList);
document.write("<br>" + "<br>");
// at method reurns the index elements
document.write("elements at 2nd index is" , vegetables.at(2));
document.write("<br>" + "<br>");
// push method element to last me phenk deta hai
var  subject = ["Chemisty" , " Maths"]
subject.push("Pakistan Studies")
document.write(subject);
document.write("<br>" + "<br>");
// joins method  join array elements into strings
document.write("joined Array with" ,vegetables.join("-"));
// The pop() method removes (pops) the last element of an array.
document.write("<br>" + "<br>");
const sportsthings= ["tabletennis", "badminton", "bat", "ball"];
sportsthings.pop();
document.write(sportsthings);
document.write("<br>" + "<br>");
// Shift (remove) the first element of the array:
var students = ["Ali", "Fatima", "Zain", "Maha"];
var removedStudent = students.shift();
document.write("Removed student: " + removedStudent);
document.write("<br>" + "<br>");
//   The unshift() method adds new elements to the beginning of an array.
let numbers = [3, 4, 5];
numbers.unshift(1, 2);
document.write(numbers);
document.write("<br>" + "<br>");
// slice() is used to take a part of an array or string without changing the original.
let fruity = ["apple", "banana", "cherry", "date"];
let result = fruity.slice(1, 3);
document.write(result); 
document.write("<br>" + "<br>");
// the splice() method is used to add, remove, or replace elements in an array.
// The reverse() method reverses the order of the elements in an array.
// The sort() method sorts the elements as strings in alphabetical and ascending order.



